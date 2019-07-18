const Document = require("../models/document");

exports.setConfigurationsForDocument = function(req, res, next) {
  const body = req.body;
  const documentId = req.params.id;
  const configurations = body.configurations;

  Document.findById(documentId, function(err, document) {
    if (document) {
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
    } else {
      res.status(405).send("Configuration document not found");
    }
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
