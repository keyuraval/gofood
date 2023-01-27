
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

router.post("/createuser",
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('name').isLength({ min: 5 }),
    body('password', 'Incorrect Password').isLength({ min: 5 }),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            await User.create({
                name: "Keyur",
                password: "abc123",
                email: "abc@gmail.com",
                location: "Mehsana"

            })
            res.json({ success: true });

        } catch (error) {
            console.log(error)
            res.json({ success: false });


        }

    })

module.exports = router;