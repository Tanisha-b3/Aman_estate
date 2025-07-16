import mongoose from "mongoose";
import { Schema } from "mongoose";

const propertySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['sale', 'rent'],
    },
    type: {
        type: String,
        enum: ['apartment', 'house', 'land'],
    },
    imageURL: {
        type: String,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    addressLine: {
        type: String,
        required: true,
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
    }
}, {
    timestamps: true,
})

const Property = mongoose.model('Property', propertySchema);
export default Property;