
import mongoose from "mongoose";


const UsersSchema = new mongoose.Schema({
    username : {
        type:String,
        required :true,
        unique:true
    },
    password: {
         type: String,
         required: true
    },
    email:    { 
        type: String,     
        required: true ,
        unique:true
    }
});

//creating another collection
const UserModel:any = mongoose.model("UsersSchema",UsersSchema);

module.exports = UserModel; 