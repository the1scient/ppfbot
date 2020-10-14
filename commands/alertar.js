const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
const botconfig = require("../config.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("você não pode fazer isso!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("você não pode fazer isso!");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Alerta")
  .setAuthor(message.author.username)
  .setColor(botconfig.red)
  .addField("Usuário Alertado", `<@${wUser.id}>`)
  .addField("Canal", message.channel)
  .addField("Número de Alertas", warns[wUser.id].warns);

  message.reply(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(x => x.name === "MUTADO");
    if(!muterole) return message.reply("Crie o rank de MUTADO!");

    let mutetime = "100s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> foi temporariamente mutado! Tempo ${mutetime}`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> foi desmutado.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 10){
    message.guild.member(wUser).kick(reason);
    message.reply(`<@${wUser.id}> foi kickado do servidor por possuir ${warns} alertas.`);
  }
  if(warns[wUser.id].warns == 20){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> foi banido do servidor por possuir ${warns} alertas.`);
  }

}

module.exports.help = {
  name: "alertar"
}
