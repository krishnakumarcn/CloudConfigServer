const Project = require("../models/project");

exports.createProject = function(req, res, next) {
  const name = req.body.name;
  const project = new Project({
    name: name
  });
  project.id = project._id;
  project.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send(project);
  });
};
