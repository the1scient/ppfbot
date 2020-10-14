const Discord = require("discord.js");
const botconfig = require("../config.json");
const prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(" não vou falar isso não, sai fora caralho");
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(`**${botmessage}**`).then(message => {
    message.react("👍")
    message.react("👎")
  })
}
module.exports.help = {
  name: "enquete"
}

