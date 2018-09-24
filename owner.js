const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

if(message.author.id !== "264015893434990592") if(message.author.id !== "438019097683558420") return message.channel.send(":no_entry_sign: Only the bot owner can use this command!"); {

	let bicon = bot.user.displayAvatarURL; // untuk menampilkan avatar dari bot kalian
	let botembed = new Discord.RichEmbed()
	.setColor("RANDOM") // kalian juga bisa menggunakan kode HEX, cari di google
	.setThumbnail(bicon) // thumbnail dari avatar bot kalian tadi
	.setAuthor("Help Owner")
	.addField("Prefix","Gunakan - Saat Menggunakan Command")
	.addField("1. -reboot", "Untuk Merestart BOT");

	message.channel.send(botembed); // untuk mengirim em

}
}
exports.help = {
	name: "owner"
}
