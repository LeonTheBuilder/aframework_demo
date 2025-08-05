const loadContext = async function () {
    const path = require("path");
    const a = require('aframework');
    a.initEnv(path.join(__dirname, 'dev.env'));
    const cfg = require('./cfg');
    await a.loadContext(cfg);
    return a;
}
module.exports = loadContext;

