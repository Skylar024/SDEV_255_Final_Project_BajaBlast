const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,  // Removes any extra spaces
        minlength: 3 // Minimum length validation
    },
    subject: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    numberOfCredits: {
        type: Number,
        required: true,
        min: 1 // Ensures the number of credits is at least 1
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true,
        
    },
    teacher: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
