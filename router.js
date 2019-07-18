const Project = require("./controllers/project");
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.send({ hi: "there" });
  });
  app.get("/projects", Project.getAllProjects);

  app.post("/project", Project.createProject);
  app.post("/project/:id/configDoc", Project.addConfigDocument);
  app.get("/project/:id", Project.getProject);
};
