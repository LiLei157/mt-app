/**
 * @description: user用户模型
 * 
 */
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username:{
        type:String,    
        unique:true,    // username用户名唯一
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})
export default mongoose.model('User',UserSchema)