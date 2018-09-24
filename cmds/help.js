const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
		let bicon = bot.user.displayAvatarURL; // untuk menampilkan avatar dari bot kalian
		let botembed = new Discord.RichEmbed()
		.setColor("RANDOM") // kalian juga bisa menggunakan kode HEX, cari di google
        .setThumbnail(bicon) // thumbnail dari avatar bot kalian tadi
        .setAuthor("Help Command")
		.addField("Prefix - ","Change Prefix | -prefix")
        .addField("1. Command Music", "gunakan -music untuk melihat command music")
	.addField("2. Command Fun", "gunakan -fun untuk melihat command music")
        .addField("2. Command Anime", "gunakan -hanime untuk melihat command anime")
        .addField("3. Other Command", "gunakan -other untuk melihat command other")
	.addField("4. Owner Command", "gunakan -owner untuk melihat command Owner");

		message.channel.send(botembed); // untuk mengirim embed yang sudah dibuat diatas..
}

exports.help = {
	name: "help"
}
