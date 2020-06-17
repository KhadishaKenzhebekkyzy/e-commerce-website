const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');


router.post('/saveUserInfo', async (req,res) => {
// userID = req.session.userID;
userID = req.cookies.user;
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
const validPassword = await bcrypt.compare(oldPassword, user.password);
if(!validPassword){
    return res.status(400).send( "wrong password");
}
else {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.updateOne({
        password: hashedPassword
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