const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send(`**Reaja com F para prestar seu respeito!**`).then(message => {
        message.react("🇫");
})}

module.exports.help = {
  name: "ftorespect"
}

