const router = require('express').Router();
const User = require('../model/User');


router.post('/saveUserInfo', async (req,res) => {
userID = req.session.userID;
user  = await User.findOne({ _id: userID})
if(!user){
    return res.status(401).send("User not found");
}


const newPassword = req.body.newPassword;
const oldPassword = req.body.oldPassword;


user.updateOne({
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    growersID:  req.body.growersID,
    phoneNumber: req.body.phoneNumber,
    organisationPhone: req.body.organisationPhone,
    city: req.body.city,
    street: req.body.street,
    country: req.body.country,
    profileImagePath: req.body.path
}, function(err, success) {
    if(err){
        return res.status(400).send('reset password link error');
    }
})

//Password matching

if(user.password != oldPassword){
    return res.status(400).send('Password not verified');
}
else {

    user.updateOne({
        password: newPassword
    }, function( err, success){
        if(err){
            res.status(400).send('Password was not updated');
        }
    })
}
return res.send('Successfully changed user information');

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