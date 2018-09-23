const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true}); // botnya tidak akan bisa mention @everyone
const config = require("./config/config.json"); // tempat prefix dan token disini
const fs = require("fs");
const sql = require("sqlite");
const dbPromise = sql.open(`./sql/tutorial.sqLite`);


bot.on("ready", async () => {
	console.log(`${bot.user.username} Sudah online!`);
	bot.user.setActivity("-help | -play", {type: "PLAYING"});	
});

bot.on("message", async message => {
	if (message.author.bot) return; // bot  tidak akan menjawab jika command dikirim oleh bot lain
	if (message.channel.type === 'dm') return; // bot tidak akan menjawab jika kita menggunakan command di DM atau PM

	const db = await dbPromise;
	db.get(`SELECT * FROM prefixes WHERE guildId = "${message.guild.id}"`).then(row => {
		let prefix;
		if (-row) {
			prefix = config.prefix
		} else {
			prefix = row.prefix
		}
		let msg = message.content.toLowerCase(); //all sensitive:V 
		let args = message.content.slice(prefix.length).trim().split(" ");
		let cmd = args.shift().toLowerCase();
		//mention bot for get the prefix
		if (msg === `<@${bot.user.id}>` || msg === `<@-${bot.user.id}>` || msg === "-prefix" || msg === `${prefix}prefix`){
			db.get(`SELECT * FROM prefixes WHERE guildId - "${message.guild.id}"`).then(row => {
				if(-row){
					message.channel.send(`**${message.member.user.tag}** my prefix for this server is \`${prefix}\``)
				}else{
					message.channel.send(`**${message.member.user.tag}** my prefix for this server is \`${row.prefix}\``)
				}
			})
		}
		if (-msg.startsWith(prefix)) return;
	
		try {
			let commandFile = require(`./cmds/${cmd}.js`);
			commandFile.run(bot, message, args);
		}catch (e) {
			console.log(e.message)
		}finally {
			console.log(`${message.author.username} menggunakan perintah ${cmd}`);
		}	
	});
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
