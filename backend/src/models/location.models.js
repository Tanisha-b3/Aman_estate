import mongoose from "mongoose";
import { Schema } from "mongoose";

const locationSchema = new Schema({
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const Location = mongoose.model('Location', locationSchema);
export default Location;