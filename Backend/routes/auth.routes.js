import express from 'express';
import { signup } from '../controllers/authcontroller.js';
const router = express.Router();

//router.get("/login", (req, res) => {
//res.send("Get Login route");
//});

router.post("/login", (req, res) => {
    res.send("Post Login route");
});

router.get("/signup", (req, res) => {
    res.send("Sign up route");
});         

router.post("/signup", signup);

//router.post("/login", login);
//router.post("/logout", logout);


export default router;
//module.exports = router;