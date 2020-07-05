const router = require('express').Router();
const User = require('../model/User');
const Advert = require('../model/Advert');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const mongoose = require('mongoose');

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

    router.post('/saveUserInfo', async (req, res) => {
        // userID = req.session.userID;

        userID = req.cookies.user;
        user = await User.findOne({ _id: userID })
        if (!user) {
            return res.status(401).send("User not found");
        }

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

    //to save the profile image

    router.route('/avatar')
        .post(upload.single('file'), async (req, res, next) => {


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
            return res.send("successfully changed profile image");
        });

    //to get the profile image


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
    router.post('/advert', async (req, res) => {
        // userID = req.session.userID;
        userID = req.cookies.user;
        user = await User.findOne({ _id: userID })
        if (!user) {
            return res.status(401).send("User not found");
        }

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
        })
        try {
            const newAdvert = await advert.save();
            return res.send("success");
        } catch (err) {
            return res.status(400).send(err);
        }

    });

    // //to add images to the advert NOT DONE !
    // router.route('/advertImages')
    //     .post(upload.array('file', 12), (req, res, next) => {
    //         res.status(200).json({
    //             success: true,
    //             message: `${req.files.length} files uploaded successfully`,
    //         });
    //     });

        //to get adverts that are type = "buy"


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

    });
    return res.send(adverts);

    });

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
    
        });
        return res.send(adverts);
    
        });

        //to get archived adverts aka adverts that are older than 20 days
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
    return router;
}