import User from '../models/user.models.js';
import userModel from '../models/user.models.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
    try {
        // Logic for signing up a user
        const {fullName, username, password, confirmPassword, gender, email} = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        const user = await userModel.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }      

        //HASH PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
         
        const boyprofilepicture = "https://robohash.org/pink%20male%20round%20300%20size";
        const girlprofilepicture = "https://robohash.org/pink%20female%20round%20300%20size";      
        const newUser = new userModel({
            fullName,
            username,
            password: hashedPassword,
            gender,
            email,
            profilepicture: gender === "male"? boyprofilepicture : girlprofilepicture, // Set default profile picture based on gender
        });

        if(newUser){
            await generateTokenAndSetCookie(res, newUser._id); // Generate token and set cookie
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilepicture: newUser.profilepicture
                });
        } else {
             res.status(400).json({ error: "Failed to create user" });
        }
        } catch (error) {
        res.status(500).json({ error: "An error occurred during signup"});
        console.log(error);
    };
}

export const login = async (req, res) => {
    try {
        // Logic for logging in a user
        const{username, password} = req.body;
        const user = await userModel.findOne({ username });
        const isPasswordValid = user ? await bcrypt.compare(password, user.password) : false;
        if (!user || !isPasswordValid) {
            return res.status(400).json({ error: "Invalid username or password" });
        }
        res.status(200).json({ message: "User logged in successfully" });
              
    generateTokenAndSetCookie(res, user._id); // Generate token and set cookie
    res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilepicture: user.profilepicture
    });
}
     catch (error) {
        res.status(500).json({ error: "An error occurred during login" });
    }
};

  
export const logout = (req, res) => {
    try {
        // Logic for logging out a user         
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred during logout" });
    }           
};  
