const Discord = require("discord.js");
const botconfig = require("../config.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");
    message.delete().catch(O_o=>{});
    let icone = bot.user.displayAvatarURL;
    let sobreEmbed = new Discord.RichEmbed()
    .setDescription("Informações do BOT")
.setColor(`${botconfig.cor}`)
.setThumbnail(icone)
.addField("Nome do Bot", `**${bot.user.username}**`)
.addField("Criador do Bot", `***${botconfig.author}#2264***`)
.addField("Criado em: ", bot.user.createdAt);

    message.channel.send(sobreEmbed);
}

module.exports.help = {
  name: "sobre"
}




