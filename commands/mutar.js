const Discord = require("discord.js");
const ms = require("ms");
const botconfig = require("../config.json");
let prefix = botconfig.prefix;


module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(prefix))return message.reply(" Utilize o meu prefixo (:) para meus comandos!");

 //mutar @user tempo

 let paraMutar = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!paraMutar) return message.reply(`${message.author} Não consegui encontrar este usuário!`);
if(paraMutar.hasPermission("ADMINISTRATOR")) return message.reply(`não posso mutar esta pessoa!`);
if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply(" Você não pode fazer isso!");
let mutadoRank = message.guild.roles.find(x => x.name === "MUTADO");
let removerCivil = message.guild.roles.find (x => x.name === "» Membro");

// criação do role mutado
if(!mutadoRank) {
    try {
        mutadoRank = await message.guild.createRole({
            name: "MUTADO",
            color: botconfig.red,
            permissions: []
        })
        message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(mutadoRank, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch(e) {
        console.log(e.stack);
    }
} // fim da criação do role mutado
let tempoMutado = args[1];
if(!tempoMutado) return message.reply(`${message.author} especifique um tempo para o usuário ser mutado!`);

await(paraMutar.addRole(mutadoRank.id) && paraMutar.removeRole(removerCivil.id));
message.reply(` o usuário <@${paraMutar.id}> foi mutado por ${ms(ms(tempoMutado))}`);


await(setTimeout(function(){
paraMutar.removeRole(mutadoRank.id);
message.channel.send(`<@${paraMutar.id}> foi desmutado!`);
paraMutar.addRole(removerCivil.id);
}, ms(tempoMutado)));

}

module.exports.help = {
    name: "mutar"
}

