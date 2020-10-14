const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
const botconfig = require("../config.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");

  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não pode fazer isso.");
  if(!wUser) return message.reply("Não consegui encontratar este usuário.");
  let warnlevel = warns[wUser.id].warns;

  message.reply(`<@${wUser.id}> possui ${warnlevel} avisos.`);

}

module.exports.help = {
  name: "alertalvl"
}
