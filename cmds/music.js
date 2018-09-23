const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
		let bicon = bot.user.displayAvatarURL; // untuk menampilkan avatar dari bot kalian
		let botembed = new Discord.RichEmbed()
		.setColor("RANDOM") // kalian juga bisa menggunakan kode HEX, cari di google
        .setThumbnail(bicon) // thumbnail dari avatar bot kalian tadi
        .setAuthor("Music Command")
        .addField("1. -play / -p", "Untuk Memutar Musik");

		message.channel.send(botembed); // untuk mengirim embed yang sudah dibuat diatas..
}

exports.help = {
	name: "music"
}
