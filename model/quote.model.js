const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    placeName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    selectionDate: {
        type: String,
        required: true
    },
    selectionDateEnd: {
        type: String,
        required: false // Required only if selectedOption is "Varios días"
    },
    selectedOption: {
        type: String,
        required: true
    },
    adultCount: {
        type: Number,
        required: true
    },
    childCount: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;
