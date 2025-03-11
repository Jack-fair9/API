const express = require('express');
const Document = require('../models/Document');
const router = express.Router();

router.get('/:userId', async (req, res) => {
    try {
        const documents = await Document.find({ userId: req.params.userId });
        res.json(documents);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
