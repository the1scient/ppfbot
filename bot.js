const botconfig = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
  
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Não consegui achar os comandos!");
      return;
    }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} - carregado!`);
      bot.commands.set(props.help.name, props);
    });
  
  });

 bot.on("guildMemberAdd", (member) => { // Check out previous chapter for information about this event
    let guild = member.guild; 
    let memberTag = member.user.tag; 
	let canalGeral = guild.channels.find(j => j.name === "💜bem-vindo");
	if(!canalGeral) return message.reply("Não achei o canal 💜bem-vindo");
    if(guild.systemChannel){
      canalGeral.send(new Discord.RichEmbed() // Creating instance of Discord.RichEmbed
      .setTitle("Boas-vindas!") // Calling method setTitle on constructor. 
      .setDescription(memberTag + " juntou-se ao Power Pixel Fórum.") // Setting embed description
      .setThumbnail(member.user.displayAvatarURL) // The image on the top right; method requires an url, not a path to file!
      .addField("Membros no servidor: ", `**${member.guild.memberCount}**`) // Adds a field; First parameter is the title and the second is the value.
      .setTimestamp() // Sets a timestamp at the end of the embed
      );
    }
    });
  
  
bot.on("ready", async () => {
  console.log(`[SUCESSO] ${bot.user.username} - nosso BOT está online!`)
  let status = require('./activityMSG.json');
  let setActivity = () =>{

      let alteraStatus = status.activitys[Math.floor(Math.random()*status.activitys.length)];
      let mensagem = alteraStatus.message.replace('{users}', bot.users.size).replace('{guilds}', bot.guilds.size).replace('{channels}', bot.channels.size)
      bot.user.setActivity(mensagem, {type: alteraStatus.type})
    }

  setActivity();
  setInterval(()=>setActivity(), 1000 * 15);
  }

  
);

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);


})


bot.login(botconfig.token);