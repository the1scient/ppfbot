const Discord = require("discord.js");
const botconfig = require("../config.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("você não pode fazer isso!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Usuário não encontrado");
  if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("você não pode fazer isso!");
  let reason = args.join(" ").slice(22);

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Mandou você se fuder!")
  .setAuthor(message.author.username)
  .setColor(botconfig.cor)
  .addField("Pra quem?", `<@${wUser.id}>`)
  .addField("Canal", message.channel)
  .addField("FODA-SEEEEEEEE LALALALALALA FODA-SE");


  message.channel.send(warnEmbed);

}

module.exports.help = {
  name: "fodasedesativado"
}
