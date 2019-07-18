const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const documentSchema = new Schema({
  configurations: mongoose.Schema.Types.Mixed
});

const ModelClass = mongoose.model("document", documentSchema);

module.exports = ModelClass;
