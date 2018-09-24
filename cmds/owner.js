const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
	if(message.author.id !== "264015893434990592") if(message.author.id !== "438019097683558420") return message.channel.send(":no_entry_sign: You cannot use this command because, you are not a developer.")
		let bicon = bot.user.displayAvatarURL; // untuk menampilkan avatar dari bot kalian
		let botembed = new Discord.RichEmbed()
		.setColor("RANDOM") // kalian juga bisa menggunakan kode HEX, cari di google
        .setThumbnail(bicon) // thumbnail dari avatar bot kalian tadi
        .setAuthor("Owner Command")
	.addField("Prefix - ","Change Prefix | -prefix")
        .addField("1. -reboot", "Untuk Merestart BOT")
	.addField("2. -status", "Setting Status BOT -online -hidden -perbaikan -game")
        .addField("3. -stats", "Melihat Info Status Server BOT");

		message.channel.send(botembed); // untuk mengirim embed yang sudah dibuat diatas..
}

exports.help = {
	name: "Owner"
}
