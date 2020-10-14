const Discord = require("discord.js");
const botconfig = require("../config.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Não pude achar este usuário!");
    let kReason = args.join(" ").slice(22);
    message.delete().catch(O_o=>{});

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Você não pode fazer isso!");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Esta pessoa não pode ser kickada!");
    if(kReason.length === 0) return message.channel.send(`${message.author} Especifique uma razão para fazer isso!`)
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Usuário kickado~")
    .setColor(botconfig.cor)
    .addField("Usuário punido", `${kUser} com ID ${kUser.id}`)
    .addField("Quem puniu", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Canal", message.channel)
    .addField("Horário", message.createdAt)
    .addField("Razão", kReason);

    let kickChannel = message.guild.channels.find(`name`, "reports");
    if(!kickChannel) return message.channel.send("Não consegui achar o canal de reports.");
    message.delete().catch(O_o=>{});

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

}

module.exports.help = {
    name: "kick"
}