const express = require('express')
const { registerUser, loginUser, logOut, forgotPassword, resetPassword, getUserDetails, updatePassword } = require('../controllers/userController')
const {isAuthenticatedUser} = require('../middleware/auth')
const router = express.Router()


router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

//router.route("/password/forgot").post(forgotPassword)

// //Not working
//router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logOut) 
router.route("/me").get(isAuthenticatedUser,getUserDetails)

router.route("/password/update").put(isAuthenticatedUser,updatePassword)

module.exports = router