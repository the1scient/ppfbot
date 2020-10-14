const Discord = require("discord.js");
const botconfig = require("../config.json");
let prefix = botconfig.prefix;

module.exports.run = async (bot, message, args) => {
    var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Licobas@1234',
  database : 'roleplay'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('Verificado: ', results[0].solution);
  let solucao = results[0].solution;
});
 
connection.end();

message.reply(`Eae, a solução é ${solucao}`);
} 


module.exports.help = {
    name: "teste"
}