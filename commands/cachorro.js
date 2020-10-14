const Discord = require("discord.js");
const superagent = require("superagent");
const botconfig = require("../config.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot,message,args) => {
    if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");

    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    let dogembed = new Discord.RichEmbed()
    .setTitle("Power Pixel Apresenta: Catiorinho :dog:")
    .setColor(botconfig.cor)
    .setImage(body.url);

    message.channel.send(dogembed);
    message.delete().catch(O_o=>{});

}

module.exports.help = {
    name:"cachorro"
}