const path = require('path');
const cfgdef = require('aframework/cfgdef');

//----------------------------------------------------------------
const cfg = cfgdef();
const nodeModulesPath = path.join(__dirname, "..", 'node_modules');
cfg.nodeModulesPath = nodeModulesPath; // ejs 页面里面使用了这个路径
//----------------------------------------------------------------
cfg.app.name = 'yourappname';
cfg.loadContextFilePath = path.join(__dirname, 'loadcontext.js');
cfg.genFolder = path.join(__dirname, 'gen');
cfg.typeJsFolder = __dirname;
cfg.autowire.folders = [
    __dirname,
];
//----------------------------------------------------------------
cfg.web.port = 3013;
cfg.web.view.viewFolder = require('./web/views/viewfolder');
//----------------------------------------------------------------
cfg.mysql.database = 'koling';
cfg.mysql.serverTimezone = 'Asia/Shanghai';
//----------------------------------------------------------------
cfg.app.prop1 = process.env.APP_PROP_1 || 'some1';
cfg.app.prop1 = process.env.APP_PROP_2 || 'some2';
cfg.app.prop1 = process.env.APP_PROP_3 || 'some3';
//----------------------------------------------------------------
module.exports = cfg;
