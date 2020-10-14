const Discord = require("discord.js");
const botconfig = require("../config.json");
let prefix = botconfig.prefix;
const moment = require('moment');
moment.locale('pt-BR');


module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");
    message.delete().catch(O_o=>{});
    let sicon = message.guild.iconURL;
        let serverinfoEmbed = new Discord.RichEmbed()
        .setDescription("Descrição do servidor:")
        .setColor(`${botconfig.cor}`)
        .setThumbnail(sicon)
        .addField("__Nome do Servidor:__", `**${message.guild.name}**`)
        .addField("__Criado em:__", `**${moment(message.guild.createdAt).format('LLLL')}**`)
        .addField("__Juntou-se em:__", `**${moment(message.guild.joinedAt).format('LLLL')}**`)
        .addField("__Membros no servidor:__", `**${message.guild.memberCount}**`)
        .addField("__Dono do servidor:__", `${message.guild.owner}`)
        return message.channel.send(serverinfoEmbed);
        

}
module.exports.help = {
    name: "serverinfo"
}