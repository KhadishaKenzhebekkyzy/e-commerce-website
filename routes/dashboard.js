const router = require('express').Router();
const User = require('../model/User');


router.post('/saveUserInfo', async (req,res) => {
userID = req.session.userID;
user  = await User.findOne({ _id: userID})
if(!user){
    return res.status(401).send("User not found");
}
const lastName = req.body.lastName;
const firstName = req.body.firstName;
const middleName = req.body.middleName;
const growersID = req.body.growersID;
const phoneNumber = req.body.phoneNumber;
const organisationPhone = req.body.organisationPhone;
const city = req.body.city;
const street = req.body.street;
const country = req.body.country;

const newPassword = req.body.newPassword;
const oldPassword = req.body.oldPassword;

const profileImagePath = req.body.path;




})

router.get('userInfo', async (req, res) => { 
    userID = req.session.userID;
    user  = await User.findOne({ _id: userID})
    
    if(!user){
        return res.status(401).send("User not found");
    }

    const data = {
        lastName: user.lastName,
        firstName: user.firstName,
        middleName: user.middleName,
        growersID: user.growersID ,
        phoneNumber: user.phoneNumber,
        organisationPhone: user.organisationPhone,
        city: user.city,
        street: user.street,
        country: user.country,
        profileImagePath: user.profileImagePath
    }
    res.send(data);
})
module.exports = router;