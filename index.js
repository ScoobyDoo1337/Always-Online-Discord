// Always online discord account
// Works 2022 
const Eris = require("eris");
const keepAlive = require("./server");
keepAlive();

const bot = new Eris(process.env.TOKEN);

bot.connect();

// Make sure to create an uptimerobot moniter with ur replit url.