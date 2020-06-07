const router = require('express').Router();
const cors = require('cors');
import User, { findOne, updateOne } from '../model/User';
// import { genSalt, hash, compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import mailgun from "mailgun-js";
import { config } from 'dotenv';
config();

const Key = process.env.MG_KEY;
const DOMAIN = process.env.DOMAIN;
const mg = mailgun({apiKey: Key, domain: DOMAIN});

router.use(cors())
router.listen(8080, function () {
    console.log('CORS-enabled web server listening on port 80')
  })

// //Validation registration

// import { object, string } from '@hapi/joi';
// const registrationSchema = object({
//     email: string().email().required(),
//     password: string().required(),
//     phoneNumber: string().required(),
// });

// //Registration 

// router.post('/register', async (req, res) => {
//     const {error} = registrationSchema.validate(req.body);
//     if(error){
//        return res.status(400).send(error.details[0].message);
//     }
//     //Check if user is in database 
//     const emailExists = await findOne({ email: req.body.email});
//     if(emailExists){
//         return res.status(400).send('Email already exists');
//     }
//     //Check if phoneNumber is in database
//     const phoneNumberExists = await findOne({ phoneNumber: req.body.phoneNumber});
//     if(phoneNumberExists){
//         return res.status(400).send('Phone Number already exists');
//     }
//     //Password hashing
//     const salt = await genSalt(10);
//     const hashedPassword = await hash(req.body.password, salt);


//     const user = new User({
//         email: req.body.email,
//         password: hashedPassword,
//         phoneNumber: req.body.phoneNumber
//     });

//     try {
//         const savedUser = await user.save();
//         res.send(savedUser);
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });


// //Validation login
// const loginSchema = object({
//     phoneNumber: string().required(),
//     password: string().required(),
    
// });

// //Login

// router.post('/login', async (req, res) => {
//     const {error} = loginSchema.validate(req.body);
//     if(error){
//        return res.status(400).send(error.details[0].message);
//     }

//      //Check if phoneNumber is in database
//      const user = await findOne({ phoneNumber: req.body.phoneNumber});
//      if(!user){
//          return res.status(400).send('Phone Number does not exist');
//      }

//      //check is password is correct
//      const validPassword = await compare(req.body.password, user.password);
//      if(!validPassword){
//         return res.status(400).send( "Success");
//     }
    
// });

    //Forgot password
    router.post('/sendEmail', async (req, res) => {
        
         //Check if user is in database 
    const user = await findOne({ email: req.body.email});
    if(!user){
        return res.status(400).send('Email does not exist');
    }
    const token = sign({_id: user._id}, process.env.RESET_PASSWORD_KEY, {expiresIn: '20m'});
    
    const data = {
        from: "Mailgun Sandbox <postmaster@sandbox08b6982309f5441aae54081ffea1d5be.mailgun.org>",
        to: req.body.email,
        subject: "Reset Password",
        html: `
        <h2> Please click on given link to reset </h2>
        <p> ${process.env.CLIENT_URL}/resetpassword/${token} </p>
        `

    };
    
    updateOne({resetLink: token}, function(err, success) {
        if(err){
            return res.status(400).send('reset password link error');
        }
        else{
            mg.messages().send(data, function (error, body) {
                if(error){
                    return res.send(error);
                }
                else{
                    return res.send("Email sent");
                    
                }
            });
        }
    })

    

  

    });

//Change password
// router.put('/resetPassword', async (req, res) => {
// const {token, password} = req.body;
//     verify(token, process.env.RESET_PASSWORD_KEY, function(error, decodedData){
// if(error){
//     return res.send("Incorrect token or token expired");
// }
// else{
//     const user = findOne({ resetLink: token});
//     if( !user){
//         return res.status(400).send("User with this token does not exist"); 

//     }
//     else {
//         updateOne({password: password}, function(err, success) {
//             if(err){
//                 return res.status(400).send("Reset Password error"); 
//             }
//             else {
//                 return res.status(200).send("Password changed"); 
//             }
//         })
    
// }
// }

// }) 

// });



export default router;