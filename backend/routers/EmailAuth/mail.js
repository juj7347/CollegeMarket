const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
require("dotenv/config");

router.post(`/`, async (req, res) => {
    const email = req.body.email;

    const code = Math.floor(Math.random()* 1000000) + 100000;
    let transport = nodemailer.createTransport({
        service: `${process.env.MAIL_SERVICE}`,
        host: `${process.env.MAIL_HOST}`,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    const mailOptions = {
        from: `${process.env.MAIL_USER}`,
        to: `${email}`,
        subject: "대학시장 가입 인증코드입니다",
        text: `${code}`
    }

    await transport.sendMail(mailOptions, (error, responses) => {
        if(error) {
            console.log(error)
            return res.status(500).json({success: false, message: "email send failed"})
        }
        else {
            return res.status(200).send({code: code});
        }
    })
})

module.exports = router;