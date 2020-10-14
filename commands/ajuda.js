const Discord = require("discord.js");
const botconfig = require("../config.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");
    message.delete().catch(O_o=>{});

 let botmessage = args.join(" ");
  message.delete().catch();

  
	let canalGeral = message.guild.channels.find(j => j.name === "chat-staff");
	if(!canalGeral) return message.reply("Não achei o canal chat-staff");
	    let estagiarioRank = message.guild.roles.find(x => x.name === "Estagiário");
    if(!estagiarioRank) return message.reply("Não achei o rank de Estagiário para marcar.");
    
    let moderadorRank = message.guild.roles.find(x => x.name === "Moderador");
    if(!moderadorRank) return message.reply("Não achei o rank de Moderador para marcar.");

    let supervisorRank = message.guild.roles.find(x => x.name === "Supervisor");
		if(!supervisorRank) return message.reply("Não achei o rank de Supervisor para marcar.");




  


    
	canalGeral.send(`🗨 | ${estagiarioRank} ${moderadorRank} ${supervisorRank}  -  o usuário ${message.author} pediu ajuda com a seguinte mensagem: **${botmessage}** `);
  }
  


module.exports.help = {
    name: "ajuda"
}