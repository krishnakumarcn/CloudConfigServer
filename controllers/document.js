const Document = require("../models/document");

exports.setConfigurationsForDocument = function(req, res, next) {
  const body = req.body;
  const documentId = req.documentId;
  const configurations = body.configurations;

  Document.findById(documentId, function(err, document) {
    if (err) {
      return next(err);
    }
    document.configurations = configurations;
    document.save(function(err) {
      if (err) {
        return next(err);
      }
      res.send(document);
    });
  });
};

exports.getConfigurations = function(req, res, next) {
  let id = req.params.id;
  console.log(id);
  Document.findById(id, function(err, r) {
    if (err) return next(err);
    console.log(r);
    res.send(r);
  });
};
