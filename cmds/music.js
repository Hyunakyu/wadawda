const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
		let bicon = bot.user.displayAvatarURL; // untuk menampilkan avatar dari bot kalian
		let botembed = new Discord.RichEmbed()
		.setColor("RANDOM") // kalian juga bisa menggunakan kode HEX, cari di google
        .setThumbnail(bicon) // thumbnail dari avatar bot kalian tadi
        .setAuthor("Music Command")
	.addField("Aktivasi Terlebhi Dahulu BotMUSIC", "Dengan Cara -play, -play blackpink")
	.addField("WARNING", "Prefix ONLY - ")
        .addField("1. -play / -p", "Untuk Memutar Musik")
	.addField("2. -skip", "Untuk Skip Musik Keselanjutnya")
	.addField("3. -stop", "Untuk Sto[ Musik")
	.addField("4. -volume", "Untuk Atur Volume Musik")
	.addField("5. -np", "Untuk Mengetahui Lagu yang lagi play")
	.addField("6. -queue/ -q", "Melihat list lagu")
	.addField("7. -pause", "mempause lagu")
	.addField("8. -resume", "memulai kembali lagu yang dipause");

		message.channel.send(botembed); // untuk mengirim embed yang sudah dibuat diatas..
}

exports.help = {
	name: "music"
}
