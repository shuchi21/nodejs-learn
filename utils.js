const fs = require("fs");
const contentTypes = require("./contentTypes");

module.exports = {
  getFile: (file, res) => {
    fs.readFile(`./${file}`, (error, data) => {
      if (error) {
        // Internal Server Error 500
        res.writeHead(500, contentTypes.html);
        res.end("There was an error serving content!");
      }
      res.end(data);
    });
  },
};
