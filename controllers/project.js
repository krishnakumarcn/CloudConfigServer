const Project = require("../models/project");
const Document = require("../models/document");

exports.createProject = function(req, res, next) {
  const name = req.body.name;
  const ppm_id = req.body.ppm_id;
  const description = req.body.description;
  const project = new Project({
    name: "" + name,
    ppm_id: "" + ppm_id,
    description: "" + description,
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
  const configDocumentEnv = req.body.env;
  const confidDocumentDescription = req.body.description;
  Project.findById(projectId, function(err, project) {
    if (err) {
      return next(err);
    }
    if (project) {
      const configDocument = new Document({
        configurations: null
      });
      configDocument.save(function(err) {
        if (err) {
          return next(err);
        }
        const documentEntry = {
          _id: configDocument._id,
          env: configDocumentEnv,
          description: confidDocumentDescription
        };
        if (project.documents) {
          project.documents.push(documentEntry);
        } else {
          project.documents = [];
          project.documents.push(documentEntry);
        }
        project.save(function(err) {
          if (err) {
            return next(err);
          }
          res.send(project);
        });
      });
    } else res.status(405).send("Project not found");
  });
};

exports.getConfigDoc = function(req, res, next) {
  const projectId = req.params.project_id;
  const env = req.params.env;

  Project.findById(projectId).exec(function(err, project) {
    if (err) {
      return next(err);
    }
    if (project) {
      const selected_document = project.documents.find(element => {
        return element.env === env;
      });
      if (selected_document) {
        Document.findById(selected_document._id).exec(function(err, document) {
          if (err) {
            return next(err);
          }
          res.send(document);
        });
      }
    } else res.status(405).send("Project not found");
  });
};
