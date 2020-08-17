var express = require('express');
var router = express.Router();
var ingredient_controller=require('../Controllers/IngredientsController.js'); 
//admin/get_all_admin_details
router.post('/createingredient', ingredient_controller.create);
router.post('/updateingredient', ingredient_controller.update);
router.post('/deleteingredient', ingredient_controller.delete);
router.post('/getingredient', ingredient_controller.getingredients);
router.get('/getingrediends_less_quantity', ingredient_controller.getingrediends_less_quantity);
router.post('/getingrediends_vendor', ingredient_controller.getingrediends_vendor);

// router.post('/reset_new_password',admin_controller.reset_new_password);

//Secondary
module.exports = router;