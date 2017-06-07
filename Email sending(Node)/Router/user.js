var express=require("express");
var router=express.Router();
var userController= require('../Controller/user');


router.route('/u1/verifyUser')
.post(userController.verifyuser)

router.route('/u1/addUser/:generated')
.get(userController.adduser);


router.route('/u1/getuser')
.post(userController.getuser)
// router.route('/u1/loginUser')
// .post(userController.loginuser)

// router.route('/u1/verify')
// .post(userController.Verifyuser)


module.exports = router;