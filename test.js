const glob = require("glob");

const files = glob
  .sync("./**/test.js")
  .filter(f => !f.split("/").includes("node_modules"))
  .filter(f => f.split("/").length > 2);

for (let file of files) require(file);
