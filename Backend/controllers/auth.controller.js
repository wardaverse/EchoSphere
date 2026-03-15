export const signup = (req, res) => {
    try {
        // Logic for signing up a user
        const {fullMA,e}
        res.status(201).json({ message: "User signed up successfully" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred during signup" });
    }           
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
