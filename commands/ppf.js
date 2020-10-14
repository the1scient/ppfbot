const Discord = require("discord.js");
let botconfig = require("../config.json");
let prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");

 message.channel.send("É o **melhor** Fórum de todos! BOT aqui, estou à disposição!");
 if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");

}
module.exports.help = {
    name: "ppf"
}