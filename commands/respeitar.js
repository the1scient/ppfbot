const Discord = require("discord.js");
const botconfig = require("../config.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");

  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Usuário não encontrado");
  let reason = args.join(" ").slice(22);

  let warnEmbed = new Discord.RichEmbed()
  .setDescription(`<@${wUser.id}> foi respeitado!`)
  .setColor(botconfig.cor)
  .addField("De quem?", message.author.username)
  .addField("Pra quem?", `<@${wUser.id}>`)
  .addField("Canal", message.channel)
  


  message.channel.send(warnEmbed).then(sentEmbed => {
    sentEmbed.react("👍")
          
});

}

module.exports.help = {
  name: "respeitar"
}
