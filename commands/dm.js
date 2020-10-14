const Discord = require("discord.js");
const botconfig = require("../config.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");
    message.delete().catch(O_o=>{});

    if(!message.member.hasPermissions("KICK_MEMBERS")) return message.reply(" Você não pode fazer isso!");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Usuário não encontrado.");
    let razao = args.join(" ").slice(22);
    let reportschannel = message.guild.channels.find( x => x.name === "bot-logs");
    if(!reportschannel) return message.reply("Não achei o canal de DM-Logs!");
  

      await rMember.send(`${razao}`)
      reportschannel.send(` o usuário **${rMember}** recebeu um DM com o seguinte aviso **${razao}** enviado por **${message.author}**`)
      
    
  }
  


module.exports.help = {
    name: "dm"
}