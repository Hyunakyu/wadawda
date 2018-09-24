const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json")

module.exports.run = async (bot, message, args) => { 
    if(message.author.id !== "264015893434990592" ) return message.channel.send("You cannot use this command because, you are not a developer.")

  rebootBot(message.channel);
       function rebootBot(channel) {
           message.react('✅')
               .then(message => bot.destroy())
               .then(message => bot.destroy())
               .then(() => bot.login(config.token));
           message.channel.send("``[Q u e l a] has successfully rebooted!``")
       }
    }
