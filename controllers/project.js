const Project = require("../models/project");
const Document = require("../models/document");

exports.createProject = function(req, res, next) {
  const name = req.body.name;
  const ppm_id = req.body.ppm_id;
  const description = req.body.description;
  const project = new Project({
    name: name,
    ppm_id: ppm_id,
    description: description,
    documents: []
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
  Project.findById(projectId, function(err, project) {
    if (err) {
      return next(err);
    }
    const configDocument = new Document({
      configurations: null
    });
    configDocument.save(function(err) {
      if (err) {
        return next(err);
      }
      if (project.documents) {
        project.documents.push(configDocument);
      } else {
        project.documents = [];
        project.documents.push(configDocument);
      }
      project.save(function(err) {
        if (err) {
          return next(err);
        }
        res.send(project);
      });
    });
  });
};
