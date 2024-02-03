import mongoose, {Schema} from "mongoose";


const userPlan = new Schema({
    type: Number,
    time: {
        type: Date,
        default: Date.now()
    },
    message: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    balance: Number,
    increase: Number
})


const Plan = mongoose.models.plans || mongoose.model('plans', userPlan)
export default Plan;