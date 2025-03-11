const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
    title: String,
    content: String,
    userId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("Document", DocumentSchema);
