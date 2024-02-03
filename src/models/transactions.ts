import mongoose, {Schema} from "mongoose";


const userTransactions = new Schema({
    type: Number,
    time: {
        type: Date,
        default: Date.now()
    },
    message: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})


const Transaction = mongoose.models.transactions || mongoose.model('transactions', userTransactions)
export default Transaction;