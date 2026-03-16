import User from '../models/user.model.js';
export const signup = (req, res) => {
    try {
        // Logic for signing up a user
        const {fullName, username, password, confirmPassword, gender} = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        const user = await userModel.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }      

        const boyprofilepicture = "https://robohash.org/pink%20male%20round%20300%20size";
        const girlprofilepicture = "https://robohash.org/pink%20female%20round%20300%20size      //HASH PASSWORD HERE 
        const newUser = new userModel({
            fullName,
            username,
            password,
            gender,
            profilepicture: gender === "male"? boyprofilepicture : girlprofilepicture, // Set default profile picture based on gender
        });

        await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilepicture: newUser.profilepicture
            })

            // message: "User signed up successfully" });

        } catch (error) {
        res.status(500).json({ error: "An error occurred during signup"});
        console.log(error);
    };

export const login = (req, res) => {
    try {
        // Logic for logging in a user
        res.status(200).json({ message: "User logged in successfully" });
    } catch (error) {
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
}
