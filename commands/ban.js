const Discord = require("discord.js");
const botconfig = require("../config.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("Não pude achar este usuário!");
        let bReason = args.join(" ").slice(22);
        message.delete().catch(O_o=>{});
        if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Você não pode fazer isso!");
        if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Esta pessoa não pode ser kickada!");
    
        let banEmbed = new Discord.RichEmbed()
        .setDescription("~Ban~")
        .setColor(botconfig.cor)
        .addField("Usuário banido", `${bUser} com ID ${bUser.id}`)
        .addField("Banido por", `<@${message.author.id}> com ID ${message.author.id}`)
        .addField("Canal", message.channel)
        .addField("Horário", message.createdAt)
        .addField("Razão", bReason);
    
        let incidentchannel = message.guild.channels.find(`name`, "reports");
        if(!incidentchannel) return message.channel.send("Não consegui achar o canal de reports!");

        message.guild.member(bUser).ban(bReason);
        incidentchannel.send(banEmbed);
    
}

module.exports.help = {
    name:"ban"
}