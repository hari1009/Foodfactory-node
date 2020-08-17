var express = require('express');
var router = express.Router();
var user_controller=require('../Controllers/UserController.js'); 
//admin/get_all_admin_details
router.post('/signup', user_controller.signup);
router.post('/signin', user_controller.signin);
router.post('/updatepassword', user_controller.updatepassword);
router.post('/resetpassword', user_controller.resetpassword);
router.post('/updatestatus', user_controller.updatestatus);

// router.post('/reset_new_password',admin_controller.reset_new_password);

//Secondary
module.exports = router;