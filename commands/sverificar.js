const Discord = require("discord.js");
const botconfig = require("../config.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");
    message.delete().catch(O_o=>{});

    if(!message.member.hasPermissions("KICK_MEMBERS")) return message.reply(" Você não pode fazer isso!");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Usuário não encontrado.");
    let gRole = message.guild.roles.find(x => x.name === "Civil");
    if(!gRole) return message.reply("Erro. [1]");
    let nverificadorank = message.guild.roles.find(x => x.name === "Não Verificado");
    let reportschannel = message.guild.channels.find( x => x.name === "reports");
    if(!reportschannel) return message.reply("Não achei o canal de reports!");
	let canalGeral = message.guild.channels.find(j => j.name === "💬┆geral");
	if(!canalGeral) return message.reply("Não achei o canal 💬┆geral");
	    let embRank = message.guild.roles.find(x => x.name === "Embaixador");
    let ajuRank = message.guild.roles.find(x => x.name === "Ajudantes");
    let canRank = message.guild.roles.find(x => x.name === "Candidatos");
		if(!embRank) return message.reply("Não achei o rank de Embaixadores para marcar.");
	if(!ajuRank) return message.reply("Não achei o rank de Ajudants para marcar.");
	if(!canRank) return message.reply("Não achei o rank de Candidatos para marcar.");




    if(rMember.roles.has(gRole.id)) return message.reply("Usuário já possui este rank..");
    await(rMember.removeRole(nverificadorank) && rMember.addRole(gRole));
  
    try{
      await rMember.send(`Parabéns, **você foi verificado** no servidor Oficial do HyceRP!`)
      message.channel.send(`O usuário **<@${rMember.id}>** **foi verificado**!`)
    }catch(e){
        message.channel.send(`O usuário **<@${rMember.id}> foi verificado**! ***[DMs BLOQUEADOS]***`)
    }
    reportschannel.send(`O usuário ${rMember} foi verificado por ${message.author}`);
	canalGeral.send(`🗨 | ${embRank} ${ajuRank} ${canRank} -  o usuário ${rMember} foi verificado! Boas-vindas! `);
  }
  


module.exports.help = {
    name: "sverificar"
}