const Discord = require("discord.js");
const superagent = require("superagent");
const botconfig = require("../config.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot,message,args) => {
    if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`);

    let dogembed = new Discord.RichEmbed()
    .setTitle("PowerPixel Apresenta: Gatinho :cat:")
    .setColor(botconfig.cor)
    .setImage(body.file);

    message.channel.send(dogembed);
    message.delete().catch(O_o=>{});

}

module.exports.help = {
    name:"gato"
}