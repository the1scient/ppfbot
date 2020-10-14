const Discord = require("discord.js")
const botconfig = require("../config.json");
const prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    let ajudaEmbed = new Discord.RichEmbed()
    if(message.member.roles.find(r => r.name === "Administrador") || message.member.roles.find(i => i.name === "Supervisor") || message.member.roles.find(c => c.name === "Chefe da moderação") || message.member.roles.find(x => x.name === "Moderador") || message.member.roles.find(k => k.name === "Estagiário")){
        let ajudaEmbed = new Discord.RichEmbed()
        .setDescription("Ajuda & Comandos")
        .setColor(`${botconfig.cor}`)
        .addField("**Ajuda**", "Exibe os comandos do bot PowerPixel.")
        .addField("**Alertalvl**", "Exibe os alertas de algum usuário.")
        .addField("**Avatar**", "Exibe o avatar de algum usuário.")
        .addField("**Cachorro**", "Exibe um Cachorro.")
        .addField("**Facebook**", "Exibe o link do Facebook do PowerPixel.")
        .addField("**Gato**", "Exibe um Gato")
        .addField("**Ppf**", "Verifica se o BOT está online.")
        .addField("**Respeitar**", "Respeita alguém")
        .addField("**Serverinfo**", "Exibe as informações do servidor.")
        .addField("**Sobre**", "Exibe as informações do BOT PowerPixel.")
        .addField("**Verificar**", "Em criação!")

        .addField("🛠️ __**Comandos STAFF**__ 🛠️", "Você é um Staff! Tem acesso aos comandos staff que estão abaixo:")

        .addField("**Alertar**", "Alerta um usuário.")
        .addField("**Anunciar**", "Faz o bot anunciar algo (Tudo em maiúsculo e negrito)")
        .addField("**Ban**", "Bane um usuário.")      
        .addField("**Darrank**", "Dá um rank a um usuário.")
        .addField("**DM**", "Envia um DM a um usuário.")
        .addField("**Enquete**", "Faz o bot criar uma enquete com likes e dislikes.")
        .addField("**Kick**", "Kicka um usuário.")
        .addField("**Limpar**", "Limpa uma quantidade de mensagens.")
        .addField("**Mutar**", "Muta um usuário por x segundos.")
        .addField("**Rrank**", "Remove um rank de um usuário.")
        .addField("**Say**", "Faz o bot falar algo.")
        .addField("**Vergonha**", "Muta um usuário por certo tempo + deixa o usuário no Mural da Vergonha por uma certa razão.")
        
        
        message.author.send(ajudaEmbed);
    } else {
        let ajudaEmbed = new Discord.RichEmbed()
        .setDescription("Ajuda & Comandos")
        .setColor(`${botconfig.cor}`)
        .addField("**Ajuda**", "Exibe os comandos do bot PowerPixel.")
        .addField("**Alertalvl**", "Exibe os alertas de algum usuário.")
        .addField("**Avatar**", "Exibe o avatar de algum usuário.")
        .addField("**Cachorro**", "Exibe um Cachorro.")
        .addField("**Facebook**", "Exibe o link do Facebook do PowerPixel.")
        .addField("**Gato**", "Exibe um Gato")
        .addField("**Ppf**", "Verifica se o BOT está online.")
        .addField("**Respeitar**", "Respeita alguém")
        .addField("**Serverinfo**", "Exibe as informações do servidor.")
        .addField("**Sobre**", "Exibe as informações do BOT PowerPixel.")
        .addField("**Verificar**", "Em criação!")
        message.author.send(ajudaEmbed);
    }
    

    message.reply(" ✅| Enviei pra você no seu privado!")

}

module.exports.help = {
    name:"comandos"
}