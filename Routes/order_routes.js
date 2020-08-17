var express = require('express');
var router = express.Router();
var order_controller=require('../Controllers/OrderController.js'); 
//admin/get_all_admin_details
router.post('/createorder', order_controller.create);
router.post('/updateorder', order_controller.update);
router.post('/deleteorder', order_controller.delete);
router.post('/getorder', order_controller.getorder);
router.post('/getorderbaseduser', order_controller.getorderbaseduser);

// router.post('/reset_new_password',admin_controller.reset_new_password);

//Secondary
module.exports = router;