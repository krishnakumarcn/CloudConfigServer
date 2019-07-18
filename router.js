const Project = require("./controllers/project");
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.send("Welcome to Nissan Digital Cloud Config Server.");
  });
  app.post("/project", Project.createProject);
};
