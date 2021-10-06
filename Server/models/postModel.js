const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: "User"
    },
    apartmentId: {
        type: ObjectId,
        ref: "Apartment"
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Comments', postSchema);
