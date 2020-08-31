
const router = require('express').Router();
var userController = require('../controllers/userController');
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.put('/resetPassword', userController.resetPassword);
router.post('/sendEmail', userController.sendEmail);

module.exports = router;