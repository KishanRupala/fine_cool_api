const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const { validateContactAndEmail } = require('../middlewares/validation');
const User = require('../models/users');
const errorMiddleware = require('../middlewares/error-middlewares');


router.post('/login',validateContactAndEmail , async (req, res) => {
    try {

        const user = await User.findOne({where : {contact_no : req.body.contact_no}})
        if(!user){
            return res.status(200).json({
                success: false,
                message: "User not found",
              });
        }

        // Generate a 4-digit OTP (1000 to 9999)
        const otp = Math.floor(1000 + Math.random() * 9000);
        
        return res.status(200).json({
            success: true,
            message: "OTP sent successfully.",
            otp: otp
        });
        
    } catch (error) {
        console.error('Login error:', error);
       errorMiddleware(error);
    }
})

module.exports = router;