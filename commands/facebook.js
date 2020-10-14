const Discord = require("discord.js");
const botconfig = require("../config.json");
const prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    message.reply(` nosso **Facebook** é: https://pt-br.facebook.com/PPixelf/`);
    
}

module.exports.help = {
    name:"facebook"
}