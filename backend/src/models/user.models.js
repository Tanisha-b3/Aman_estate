import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    bookings: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
        default: []
    },
    properties: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
        default: []
    },
    reviews: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
        default: []
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
export default User;