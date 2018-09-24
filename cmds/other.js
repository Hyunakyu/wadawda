const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
		let bicon = bot.user.displayAvatarURL; // untuk menampilkan avatar dari bot kalian
		let botembed = new Discord.RichEmbed()
		.setColor("RANDOM") // kalian juga bisa menggunakan kode HEX, cari di google
        .setThumbnail(bicon) // thumbnail dari avatar bot kalian tadi
        .setAuthor("Other Command")
	.addField("1. -uptime", "Life Time BOT")
        .addField("2. -ping", "cuma buat test Latency:3")
        .addField("3. -prefix", "Untuk mengganti prefix")
        .addField("4. -autorole", "Untuk set autorole")
        .addField("5. -weather", "untuk melihat cuaca")
        .addField("6. -xchat", "untuk menghapus history chat")
        .addField("7. -kick", "Cara -kick@Mention user untuk mengkick, Need Permission Role High")
        .addField("8. -ban", "Cara -ban@Mention user untuk mengkick, Need Permission Role Admin/Administrator")
        .addField("9. -serverinfo", "Mengetahui Informasi Server Discord")
        .addField("10. -botinfo", "Mengetahui Pembuat Bot");

		message.channel.send(botembed); // untuk mengirim embed yang sudah dibuat diatas..
}

exports.help = {
	name: "other"
}
