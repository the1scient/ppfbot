const Discord = require("discord.js")
const botconfig = require("../config.json");
let prefix = botconfig.prefix;


module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Usuário não encontrado");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setColor(`${botconfig.cor}`)
    .addField("Usuário denunciado", `${rUser} com ID: ${rUser.id}`)
    .addField("Denunciado por", `${message.author} com ID: ${message.author.id}`)
    .addField("Canal", `${message.channel}`)
    .addField("Horário", `${message.createdAt}`)
    .addField("Razão", `${rreason}`);

    let reportschannel = message.guild.channels.find( x => x.name === "reports");
    if(!reportschannel) return message.channel.send("Não achei o canal de denúncias.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
}

  module.exports.help = {
      name: "denunciar"
  }
