const Project = require("./controllers/project");
const Document = require("./controllers/document");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.send("Welcome to Nissan Digital Cloud Config Server.");
  });
  app.post("/project", Project.createProject);
  
  //Set configurations for document with id
  app.post(
    "/configurations",
    Document.setConfigurationsForDocument
  );

  
  // Get configurations for id
  app.get("/configurations/:id", Document.getConfigurations);
};
