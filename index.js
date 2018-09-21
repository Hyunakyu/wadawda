const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true}); // botnya tidak akan bisa mention @everyone
const config = require("./config/config.json");
onst prefixes = require("./prefixes.json"); // tempat prefix dan token disini
const fs = require("fs");
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const client = new Discord.Client({disableEveryone: true});
const youtube = new YouTube("AIzaSyBonrJPtHPxsiO2IpX2f9LwiNp2oigc8eQ");
const queue = new Map();

bot.on("ready", async () => {
	console.log(`${bot.user.username} Sudah online!`);
	bot.user.setActivity("-help | -play", {type: "PLAYING"});	
});

bot.on("message", async message => {
	let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
	if(!prefixes[message.guild.id]){
	  prefixes[message.guild.id] = {
		prefixes: auth.prefix
	  };
	}
	let prefix = prefixes[message.guild.id].prefixes;
  });


bot.on("message", async message => {
	if (message.author.bot) return; // bot  tidak akan menjawab jika command dikirim oleh bot lain
	if (message.channel.type === 'dm') return; // bot tidak akan menjawab jika kita menggunakan command di DM atau PM

	let prefix = config.prefix;
	let msg = message.content.toLowerCase(); //all sensitive:V 
	let args = message.content.slice(prefix.length).trim().split(" ");
	let cmd = args.shift().toLowerCase();

	if (!msg.startsWith(prefix)) return;

	try {
		let commandFile = require(`./cmds/${cmd}.js`);
		commandFile.run(bot, message, args);
	}catch (e) {
		console.log(e.message)
	}finally {
		console.log(`${message.author.username} menggunakan perintah ${cmd}`);
	}
});


bot.on("guildMemberAdd", member => {
	let autorole = JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
	if (!autorole[member.guild.id]) { // jika tidak ada autorole yang di set, agar tidak error saat ada yang join
		autorole[member.guild.id] = {
			autorole: config.autorole
		};
	}
	var role = autorole[member.guild.id].role;
	if (role === '0') return; // jika autorole 0 maka akan dihentikan dan tidak menyebabkan error
	member.addRole(role);

	

});

bot.login(config.token);
