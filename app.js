const api = require('./api.js');
// because webpack by default looks under node_modules/
const $ = require('jquery');
const money = require('./money.js');
const welcomeUser = require('./welcomeUser.coffee');
const ReactApp = require('./react/ReactApp.js');
const appConfig = require('./ts/appConfig.ts');

money('USD', (fxRates) => console.log(fxRates));

const users = api.getUsers();

welcomeUser('Campbell');
