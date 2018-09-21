const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
		let sicon = message.guild.iconURL; // kalau server gunakan icon bukan displayAvatar
		let serverembed = new Discord.RichEmbed()
		.setAuthor("Informasi Server")
		.setColor("RANDOM")
		.setThumbnail(sicon)
		.addField("Nama Server", message.guild.name) // nama dari guildnya
		.addField("Dibuat", message.guild.createdAt) // tanggal dibuat guildnya
		.addField("Kamu Join", message.member.joinedAt) // tanggal kamu join guild
		.addField("Owner", message.guild.owner); // owner dari guild

		message.channel.send(serverembed);
}

exports.help = {
	name: "botinfo"
}