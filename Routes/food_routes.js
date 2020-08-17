var express = require('express');
var router = express.Router();
var food_controller=require('../Controllers/FoodController.js'); 
//admin/get_all_admin_details
router.post('/createfood', food_controller.createfood);
router.post('/getallfoods', food_controller.getallfoods);
router.post('/updatefood', food_controller.updatefood);
router.post('/deletefood', food_controller.deletefood);
router.get('/food_sold_lost', food_controller.food_sold_lost);

// router.post('/reset_new_password',admin_controller.reset_new_password);

//Secondary
module.exports = router;