 const mongoose = require('mongoose');
 const connectToMongoDB = async () => {
   try {
     await mongoose.connect(process.env.MONGO_DB_URL,);
     console.log('Connected to MongoDB');
   } catch (error) {
     console.error('Error connecting to MongoDB:', error);
     process.exit(1); // Exit the process with an error code
   }        
  };
module.exports = connectToMongoDB;
