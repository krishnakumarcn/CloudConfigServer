const Document = require("../models/document");

exports.setConfigurationsForDocument = function(req, res, next) {
  const body = req.body;
  const documentId = body.documentId;
  const configurations = body.configurations;

  Document.findOneAndUpdate(
    { _id: documentId },
    { configurations: configurations },
    function(err) {
      if (err) {
        return next(err);
      }
      res.send("success");
    }
  );

  //   document.save();
};

exports.getConfigurations = function(req, res, next) {
  let id = req.params.id;
  console.log(id);
  Document.findById(id, function(err, r) {
    if (err) return next(err);
    console.log(r);
    res.send(r.configurations);
  });
};
