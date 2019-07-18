const Project = require("./controllers/project");
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.send({ hi: "there" });
  });
  app.post("/project", Project.createProject);
};
