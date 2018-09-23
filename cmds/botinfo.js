const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
		let bicon = bot.user.displayAvatarURL; // untuk menampilkan avatar dari bot kalian
		let botembed = new Discord.RichEmbed()
		.setAuthor("Informasi Bot")
		.setColor("RANDOM") // kalian juga bisa menggunakan kode HEX, cari di google
		.setThumbnail(bicon) // thumbnail dari avatar bot kalian tadi
		.addField("Nama Bot", bot.user.username)
		.addField("Dibuat Oleh", "F r a q u e l 	,,	 N a q u e l 	&	TEAM q u e l")
		.addField("Dibuat Pada Tepat Tanggal & Jam", bot.user.createdAt)
		.addField("Invite Link" , "http://j.gs/Bd5m");

		message.channel.send(botembed); // untuk mengirim embed yang sudah dibuat diatas..
}

exports.help = {
	name: "botinfo"
}
