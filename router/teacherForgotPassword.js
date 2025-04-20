const express = require('express');
const router = express.Router();
const controller = require('../controllers/teacherForgotPasswordController');

router.post('/send-otp', controller.sendOtp);
router.post('/verify-otp', controller.verifyOtp);
router.post('/reset', controller.resetPassword);

module.exports = router;