const mongoose = require("mongoose");
const DocumentEntry = require("./documentEntrySchema");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: { type: String },
  documents: { type: [DocumentEntry] }
});

const ModelClass = mongoose.model("project", projectSchema);

module.exports = ModelClass;
