const Discord = require("discord.js");
const botconfig = require("../config.json");
let prefix = botconfig.prefix;
module.exports.run = (bot, message, args) => {
    if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");
    message.delete().catch(O_o=>{});

    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    if(message.mentions.users.first() !== undefined){
        	message.channel.sendMessage(':frame_photo: | O link para o avatar de **' + message.mentions.users.first().username + '** é: **' + message.mentions.users.first().avatarURL + '**.')
        } else if (parts[1] === 'server') {
        	message.channel.sendMessage(':frame_photo: | O link para o avatar deste server é: **' + message.guild.iconURL + '**.')
        } else if (parts[1] === 'me') {
        	message.channel.sendMessage(':frame_photo: | O link para o seu avatar é: **' + message.author.avatarURL + '**.')
        } else {
        	message.channel.sendMessage('<:vpRedTick:257437215615877129> | Você não deu argumentos corretos. Digite :comandos para ver comandos.').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
        }
}

module.exports.help = {
    name:"avatar"
}