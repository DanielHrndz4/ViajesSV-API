const express = require("express");
const router = express.Router();
const Quote = require("../model/quote.model");

router.post('/quote', async (req, res) => {
    try {
        const {
            placeName,
            name,
            email,
            selectionDate,
            selectionDateEnd,
            selectedOption,
            adultCount,
            childCount,
            total,
            placeId
        } = req.body;

        const newQuote = new Quote({
            placeName,
            name,
            email,
            selectionDate,
            selectionDateEnd,
            selectedOption,
            adultCount,
            childCount,
            total,
            placeId
        });

        await newQuote.save();

        res.status(201).send('Quote request received and saved');
    } catch (error) {
        console.error('Error saving quote', error);
        res.status(500).send('Error saving quote');
    }
});

router.get('/quotes/:email', async (req, res) => {
    try {
        const { email } = req.params;
        const quotes = await Quote.find({ email });

        if (quotes.length === 0) {
            return res.status(404).send('No quotes found for this email');
        }

        res.status(200).json(quotes);
    } catch (error) {
        console.error('Error fetching quotes', error);
        res.status(500).send('Error fetching quotes');
    }
});

module.exports = router;