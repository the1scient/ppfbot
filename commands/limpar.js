const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
  if(!args[0]) return message.channel.send("oof");
  
  message.channel.bulkDelete(args[0]).then(() => {
    message.reply(`Limpei ${args[0]} mensagens.`).then(msg => msg.delete(5000));
    message.delete().catch(O_o=>{});

  });
}

module.exports.help = {
  name: "limpar"
}
