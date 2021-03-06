const Project = require("./controllers/project");
const Document = require("./controllers/document");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.send("Welcome to Nissan Digital Cloud Config Server.");
  });
  app.get("/projects", Project.getAllProjects);

  app.post("/project", Project.createProject);
  app.put("/project/:id/configDoc", Project.addConfigDocument);
  app.get("/project/:id", Project.getProject);
  app.get("/project/:project_id/env/:env", Project.getConfigDoc);

  //Set configurations for document with id
  app.post("/configurations/:id", Document.setConfigurationsForDocument);

  // Get configurations for id
  app.get("/configurations/:id", Document.getConfigurations);
};
