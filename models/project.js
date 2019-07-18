const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: { type: String },
  documents: { type: Array }
});

const ModelClass = mongoose.model("project", projectSchema);

module.exports = ModelClass;
