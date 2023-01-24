
const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post("/createuser", async (req, res) => {
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