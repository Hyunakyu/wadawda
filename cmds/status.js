const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
if(message.author.id !== "264015893434990592") if(message.author.id !== "438019097683558420") return message.channel.send("You may not use this command because you are not a developer");

if(args[0] == "online") return bot.user.setStatus("online"), bot.user.setActivity("-help | -play", {type: "PLAYING"});

if(args[0] == "hidden") return bot.user.setStatus("invisible"), bot.user.setActivity("-help | -play", {type: "PLAYING"});

if(args[0] == "perbaikan") return bot.user.setStatus("dnd"), bot.user.setActivity("Maintenance", {type: "PLAYING"});

if(args[0] == "game") return bot.user.setStatus("idle"), bot.user.setActivity("GTA V", {type: "PLAYING"});

}
exports.help = {
	name: "status"
}
