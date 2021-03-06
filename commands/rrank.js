const Discord = require("discord.js");
const botconfig = require("../config.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");
    
  
    const addedrole = args.slice(1).join(' ');
    const user = message.mentions.members.first();
    const foundRole = message.guild.roles.find((role) => role.name.toLowerCase() === args.slice(1).join(' ').toLowerCase());
let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Usuário não encontrado.");
    if (message.mentions.members.size < 1) return msg.reply("Usuário inexistente");
    if (addedrole.length < 1) return message.reply("Rank inexistente");
    if (!foundRole) return message.reply("Rank inexistente.");
    if (!user.roles.has(foundRole.id)) return message.reply("Membro não possui este rank.");

    rMember.removeRole(foundRole).then(() => message.reply(`**Feito! ✅**`)).catch(() => message.reply(`O usuário **<@${rMember.id}>** perdeu o Rank **${gRole}**!`))
  console.log(`${message.author} removeu o rank ${addedrole} ao usuário ${rMember}`);
    try{
      await rMember.send(`Sinto muito, você perdeu o Rank **${addedrole}** no servidor Oficial do HyceRP.`)
    }catch(e){
        message.channel.send(`O usuário **<@${rMember.id}>** perdeu o Rank **${addedrole}**! ***[DMs BLOQUEADOS]***`)
    }
  }
  


module.exports.help = {
    name: "rrank"
}