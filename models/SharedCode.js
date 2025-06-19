// models/SharedCode.js
const mongoose = require('mongoose');

const sharedCodeSchema = new mongoose.Schema({
  code: { type: String, required: true },
  language: { type: String, required: true },
  token: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now, expires: 3600 }, // auto-delete after 1 hour
});

module.exports = mongoose.model('SharedCode', sharedCodeSchema);
