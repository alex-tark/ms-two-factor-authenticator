const conf = require("ms-conf");
const path = require("path");

conf.prependDefaultConfiguration(path.resolve(__dirname, './configuration'));

module.exports = conf;