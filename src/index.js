require("dotenv").config();
const server = require("./app");

const PORT = process.env.PORT || 8080;

const startSever = () => {
  server.listen(PORT, () => {
    console.log(`App running in http://localhost:${PORT}`);
  });
};

setImmediate(startSever);

module.exports = server;
