const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const documentEntrySchema = new Schema({
  env: { type: String },
  description: { type: String }
});

module.exports = documentEntrySchema;
