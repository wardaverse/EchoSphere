const express = require ('express');
const router = express.Router();

router.get("/login", (req, res) => {
    res.send("Login route");
});

router.get("/signup", (req, res) => {
    res.send("Sign up route");
});         

module.exports = router;