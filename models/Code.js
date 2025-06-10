const mongoose = require('mongoose');

const CodeSchema = new mongoose.Schema({
  code: { type: String, required: true },
  language: { type: String, required: true },
  output: String,
  linkId: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now, expires: '24h' } // TTL index for 24 hours
});

module.exports = mongoose.model('Code', CodeSchema);