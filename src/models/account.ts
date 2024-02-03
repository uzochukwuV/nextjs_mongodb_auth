import mongoose, {Schema} from "mongoose";

const userAccount =new Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    state: String,
    country: String,
    phone: String,
    age: String,  
})


const Account  = mongoose.models.account ||   mongoose.model('account', userAccount)
export default Account;
