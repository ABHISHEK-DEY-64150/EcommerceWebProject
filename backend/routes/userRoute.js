const express = require('express')
const { registerUser, loginUser, logOut, forgotPassword, resetPassword, getUserDetails, updatePassword } = require('../controllers/userController')
const {isAuthenticatedUser} = require('../middleware/auth')
const router = express.Router()


router.route("/api/v1/register").post(registerUser)

router.route("/api/v1/login").post(loginUser)

//router.route("/password/forgot").post(forgotPassword)

// //Not working
//router.route("/password/reset/:token").put(resetPassword);

router.route("/api/v1/logout").get(logOut) 
router.route("/api/v1/me").get(isAuthenticatedUser,getUserDetails)

router.route("/api/v1/password/update").put(isAuthenticatedUser,updatePassword)

module.exports = router