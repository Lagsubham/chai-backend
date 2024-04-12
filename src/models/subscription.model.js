import mongoose, {Schema} from "mongoose"

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // one who is subscribing  
        ref: "User"
    },//the user who is doing the subscribing. It holds the ObjectId of the user who has subscribed to something.
    channel: {
        type: Schema.Types.ObjectId, // one to whom 'subscriber' is subscribing 
          ref: "User"
        //(then this interpretation is correct. The channel field stores the ObjectId of the user (channel) that the subscriber is following.
      
    }
}, {timestamps: true}))



export const Subscription = mongoose.model("Subscription", subscriptionSchema)
