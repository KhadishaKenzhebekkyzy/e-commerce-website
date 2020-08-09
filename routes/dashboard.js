const router = require('express').Router();
const User = require('../model/User');
const Advert = require('../model/Advert');
const Company = require('../model/Company')
const Subscirption = require('../model/Subscription')
const bcrypt = require('bcryptjs');
const session = require('express-session');
const mongoose = require('mongoose');
const mailgun = require("mailgun-js");
const dotenv = require('dotenv');
dotenv.config();

const Key = process.env.MG_KEY;
const DOMAIN = process.env.DOMAIN;
const mg = mailgun({apiKey: Key, domain: DOMAIN});

// const multer = require('multer');
// const methodOverride = require('method-override');
// const GridFsStorage = require('multer-gridfs-storage');
//things to complete: add companies model, figure out how to upload pictures, 



//initializing gridfs 

// mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true })
//     .then(() => console.log('Mongo Connected'))
//     .catch((err) => console.log(err));


module.exports = (upload) => {
    let gfs;

    mongoose.connection.once('open', () => {
        // initialize stream
        gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
            bucketName: "uploads"
        });
    });


    //start of functions

    //adding user information 
    //tested
    //@param avatar - a photo of the user
    // @param req.body with the information below
    router.route('/saveUserInfo')
    .post(upload.single('avatar'), async (req, res, next) => {

        // userID = req.session.userID;

        userID = req.cookies.user;
        user = await User.findOne({ _id: userID })
        if (!user) {
            return res.status(401).send("User not found");
        }
        user.updateOne({
            profileImage: req.file.filename,
        }, function (err, success) {
            if (err) {
                return res.status(400).send('information not updated');
            }
        })
        user.updateOne({
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            growersID: req.body.growersID,
            phoneNumber: req.body.phoneNumber,
            organisationPhone: req.body.organisationPhone,
            city: req.body.city,
            street: req.body.street,
            country: req.body.country,
        }, function (err, success) {
            if (err) {
                return res.status(400).send('information not updated');
            }
        })

        const newPassword = req.body.newPassword;
        const oldPassword = req.body.oldPassword;

        if (newPassword && oldPassword) {

            //Password matching
            const validPassword = await bcrypt.compare(oldPassword, user.password);
            if (!validPassword) {
                return res.status(400).send("wrong password");
            }
            else {

                //if matched hash a password and save (repeated code needs to be refactored)
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(newPassword, salt);
                user.updateOne({
                    password: hashedPassword
                }, function (err, success) {
                    if (err) {
                        res.status(400).send('Password was not updated');
                    }
                })
            }
        }

        return res.send('Successfully changed user information');

    })

    //to get the existing information about the user
    //tested
    router.get('/getUserInfo', async (req, res) => {
        //userID = req.session.userID;
        userID = req.cookies.user;
        user = await User.findOne({ _id: userID })

        if (!user) {
            return res.status(401).send("User not found");
        }

        const data = {
            lastName: user.lastName,
            firstName: user.firstName,
            middleName: user.middleName,
            growersID: user.growersID,
            phoneNumber: user.phoneNumber,
            organisationPhone: user.organisationPhone,
            city: user.city,
            street: user.street,
            country: user.country,
        }
        res.send(data);
    })

    //to get the profile image
    //tested
    router.route('/avatar')
        .get(async (req, res, next) => {
            // userID = req.session.userID;

            userID = req.cookies.user;
            user = await User.findOne({ _id: userID })
            if (!user) {
                return res.status(401).send("User not found");
            }
            filename = user.profileImage

            gfs.find({ filename: filename }).toArray((err, files) => {
                if (!files[0] || files.length === 0) {
                    return res.status(200).json({
                        success: false,
                        message: 'No files available',
                    });
                }

                if (files[0].contentType === 'image/jpeg' || files[0].contentType === 'image/png' || files[0].contentType === 'image/svg+xml') {
                    // render image to browser
                    gfs.openDownloadStreamByName(filename).pipe(res);
                } else {
                    res.status(404).json({
                        err: 'Not an image',
                    });
                }
            });
        });

    //to add an advert
    //@param file - up to 12 images can be uploaded
    //@param req.body with all the information below
    //tested
    router.route('/advert')
        .post(upload.array('file', 12), async (req, res, next) => {
        // userID = req.session.userID;
        userID = req.cookies.user;
        user = await User.findOne({ _id: userID })
        if (!user) {
            return res.status(401).send("User not found");
        }
        // console.log(req.files);
        imageNames = []
        req.files.forEach(function(item){
            imageNames.push(item.filename);
        })
        // console.log(imageNames);
        const advert = new Advert({
            userID: userID,
            title: req.body.title,
            category: req.body.category,
            type: req.body.type,
            product: req.body.product,
            class: req.body.class,
            volume: req.body.volume,
            description: req.body.description,
            price: req.body.price,
            delivery: req.body.delivery,
            elevator: req.body.elevator,
            address: req.body.address,
            occupation: req.body.occupation,
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            phoneNumber: req.body.phoneNumber,
            images: imageNames
        })
        try {
            const newAdvert = await advert.save();
            return res.send("success");
        } catch (err) {
            return res.status(400).send(err);
        }

    });

   
        // to send 4 numbers to mail
        // tested
    
    router.post('/sendCode', async(req, res)=>{
        // userID = req.session.userID;
    userID = req.cookies.user;
    user  = await User.findOne({ _id: userID})
    if(!user){
        return res.status(401).send("User not found");
    }


    token = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    const data = {
        from: "Mailgun Sandbox <postmaster@sandbox08b6982309f5441aae54081ffea1d5be.mailgun.org>",
        to: user.email,
        subject: "Код подтверждения",
        html: `
        <h2> Please click on given link to reset </h2>
        <p> ${token} </p>
        `
 
    };
    
    user.updateOne({adCode: token}, function(err, success) {
        if(err){
            return res.status(400).send('code could not be updated');
        }
        else{
            
            mg.messages().send(data, function (error, body) {
                if(error){
                    return res.send(body);
                }
                else{
                    return res.send("Email sent");
 
                }
            });
        }
    })
    
    })
    
    // to confirm the code:
    // @param code
    // tested
    router.post('/confirmCode', async(req, res)=>{
        userID = req.cookies.user;
        user  = await User.findOne({ _id: userID})
        console.log(user.adCode);
        console.log(req.body.code);
        if(!user){
            return res.status(401).send("User not found");
        }
    if( req.body.code != user.adCode){
        return res.status(401).send("wrong code");
    }
    else{
        return res.status(200).send("Success")
    }

    })


//to get adverts that are type = "Покупка"
//tested
        router.get('/buyAdverts', async(req,res)=>{
    // userID = req.session.userID;
    userID = req.cookies.user;
    user  = await User.findOne({ _id: userID})
    if(!user){
        return res.status(401).send("User not found");
    }
    const adverts = await Advert.find({
        userID: userID,
        type: "Покупка",
        timestamp : 
            {
                "$gte" : new Date(Date.now() - 20*24*60*60 * 1000)
            }
    });
    return res.send(adverts);

    });
    
//to get adverts that are type = "Продажа"
//tested
    router.get('/sellAdverts', async(req,res)=>{
        // userID = req.session.userID;
        userID = req.cookies.user;
        user  = await User.findOne({ _id: userID})
        if(!user){
            return res.status(401).send("User not found");
        }
        const adverts = await Advert.find({
            userID: userID,
            type: "Продажа",
            timestamp : 
            {
                "$gte" : new Date(Date.now() - 20*24*60*60 * 1000)
            }
    
        });
        return res.send(adverts);
    
        });


        //to get archived adverts aka adverts that are older than 20 days
        //tested
    router.get('/archivedAdverts', async(req,res)=>{
    // userID = req.session.userID;
    userID = req.cookies.user;
    user  = await User.findOne({ _id: userID})
    if(!user){
        return res.status(401).send("User not found");
    }

    const adverts = await Advert.find({
        userID: userID,
        timestamp : 
            {
                "$lte" : new Date(Date.now() - 20*24*60*60 * 1000)
            }
          

    });
    return res.send(adverts);

    });


// to add a company 
//tested
router.route('/addCompany')
        .post(upload.array('file', 12), async (req, res, next) => {

            userID = req.cookies.user;
            user = await User.findOne({ _id: userID })
            if (!user) {
                return res.status(401).send("User not found");
            }
            imageNames = []
            req.files.forEach(function(item){
            imageNames.push(item.filename);
            })
            const company = new Company({
                userID: userID,
                title: req.body.title,
                elevator: req.body.elevator,
                address: req.body.address,
                occupation: req.body.occupation,
                lastName: req.body.lastName,
                firstName: req.body.firstName,
                middleName: req.body.middleName,
                phoneNumber: req.body.phoneNumber,
                images: imageNames
            })
            try {
                await company.save();
                return res.send("success");
            } catch (err) {
                console.log(err);
                return res.status(400).send(err);
                
            }
        })


//to make a subscription
//@param type = тариф = 'стандарт'/'годовой'/'премиум'/'союз'
//tested
router.post('/subscribe', async (req,res)=>{
    userID = req.cookies.user;
    user  = await User.findOne({ _id: userID})
    if(!user){
        return res.status(401).send("User not found");
    }
    var date = new Date();
    date.setMonth(date.getMonth()+1);
    console.log(date)

    var title = 'Продление подписки на месяц / тариф ';
    title = title+req.body.type;

    const subscription = new Subscirption({
        userID:userID,
        title: title,
        status: "Успешно",
        price: "5000",
        type: req.body.type,
        activeDue: date,
    })

    try {
        await subscription.save();
        return res.send("success");
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
        
    }
})

// to get history  of my subscriptions with pagination 8 per page
//format of the url localhost:3000/subscriptions?page=1&limit=2
//tested
router.get('/subscriptions', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    userID = req.cookies.user;
    user  = await User.findOne({ _id: userID})
    if(!user){
        return res.status(401).send("User not found");
    }

    try {
      const subscirption = await Subscirption.find({
        userID: userID,
      })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
  
      // get total documents in the Posts collection 
      const count = await Subscirption.countDocuments();
  
      // return response with posts, total pages, and current page
      res.json({
        subscirption,
        totalPages: Math.ceil(count / limit),
        currentPage: page
      });
    } catch (err) {
      console.error(err.message);
    }
  });


// to get current subscirption 
// tested
router.get('/currentSubscription', async(req,res)=>{
    userID = req.cookies.user;
    user  = await User.findOne({ _id: userID})
    if(!user){
        return res.status(401).send("User not found");
    }
    const currentSubscription = await Subscirption.find({
        userID: userID,
    }).sort({_id:-1}).limit(1);
return res.send(currentSubscription);
})


// to get my comapnies
//tested
router.get('/myCompanies', async(req,res)=>{
    userID = req.cookies.user;
    user  = await User.findOne({ _id: userID})
    if(!user){
        return res.status(401).send("User not found");
    }
    const companies = await Company.find({
        userID: userID,
    })
    res.send(companies);
    
})

// to favorite an ad 
//@param adID = id of an ad that is being favorited
//tested

router.post('/favoritedAds', async(req,res)=>{
    userID = req.cookies.user;
    user  = await User.findOne({ _id: userID})
    if(!user){
        return res.status(401).send("User not found");
    }
    const addedAd = await user.update({
        $addToSet:{
            favoritedAds: req.body.adID,
        },
         function (err, success) {
            if (err) {
                return res.status(400).send('information not updated');
            }
        }
    })
    return res.send('success')
})


// to get favorited ads 
//tested
router.get('/favoritedAds', async(req,res)=>{
    userID = req.cookies.user;
    user  = await User.findOne({ _id: userID})
    if(!user){
        return res.status(401).send("User not found");
    }
    const ads = await user.favoritedAds;
    var addArray = [];
   
    for (let i =0; i<ads.length; i++){
        var ad = await Advert.findById(ads[i]);
        addArray.push(ad);
    }
    return res.send(addArray);
    
})

// to get a specific ad 
//tested
router.get('/ad/:adID', async(req,res) =>{
    const adID = req.params.adID;
    try {
        const ad = await Advert.findById(adID);
        return res.send(ad);
    } catch (err) {
        return res.status(400).send(err);
    }
})
// fetch a particular photo and render in browser
//tested
router.route('/image/:filename')
.get((req, res, next) => {
    gfs.find({ filename: req.params.filename }).toArray((err, files) => {
        if (!files[0] || files.length === 0) {
            return res.status(200).json({
                success: false,
                message: 'No files available',
            });
        }

        if (files[0].contentType === 'image/jpeg' || files[0].contentType === 'image/png' || files[0].contentType === 'image/svg+xml') {
            // render image to browser
            gfs.openDownloadStreamByName(req.params.filename).pipe(res);
        } else {
            res.status(404).json({
                err: 'Not an image',
            });
        }
    });
});
//messages 


return router;
} 