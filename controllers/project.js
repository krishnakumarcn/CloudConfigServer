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
exports.getAllProjects = function(req, res, next) {
  var projectMap = [];
  Project.find({}, function(err, projects) {
    if (err) {
      return next(err);
    }
    projects.forEach(item => {
      projectMap.push(item);
    });
    res.send(projectMap);
  });
};
exports.getProject = function(req, res, next) {
  const projectId = req.params.id;
  Project.findById(projectId, function(err, project) {
    if (err) {
      return next(err);
    }
    res.send(project);
  });
};
exports.addConfigDocument = function(req, res, next) {
  const projectId = req.params.id;
};
