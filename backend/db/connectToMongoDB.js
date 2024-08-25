import mongoose from "mongoose";

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connencted to MongoDB");
        
        
    } catch (error) {
        console.log("Error on connecting to MongoDB");
        
    }
};

export default connectToMongoDB;