const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const apartmentModel = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    comments: [{
        type: ObjectId,
        ref: "Comments"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    rented: [{
        type: ObjectId,
        ref: 'User',
        default: []
    }],
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Apartment', apartmentModel);
