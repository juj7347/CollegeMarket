const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
require("dotenv/config");

router.post(`/`, async (req, res) => {
    const text = req.body.text;
    const email = req.body.email;

    const code = Math.floor(Math.random()* 1000000) + 100000;
    const transport = nodemailer.createTransport({
        host: `${process.env.MAIL_HOST}`,
        port: process.env.MAIL_PORT,
        auth: {
            user: `${process.env.MAIL_USER}`,
            pass: `${process.env,MAIL_PASS}`
        }
    })

    await transport.sendMail({
        from: `${process.env.MAIL_FROM}`,
        to: `${email}`,
        subject: "test email",
        html: `
        <div>
            ${text}
        </div>
        `
    })
})

module.exports = router;