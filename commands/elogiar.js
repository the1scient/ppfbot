const Discord = require("discord.js");
const botconfig = require("../config.json");
const prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {

    if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");

    message.reply(" você é lindo(a)!");
    message.delete().catch(O_o=>{});

}
module.exports.help = {
    name:"elogiar"
}