import mongoose, { Schema} from "mongoose";

const userMessage = new Schema({
    messageText: {
        type: String,
        required: true
    },
    messageDate: {
        type: Date,
        default: Date.now(),
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})


const Message =mongoose.models.message  || mongoose.model('message', userMessage)
export default Message;