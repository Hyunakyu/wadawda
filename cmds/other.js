const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
		let bicon = bot.user.displayAvatarURL; // untuk menampilkan avatar dari bot kalian
		let botembed = new Discord.RichEmbed()
		.setColor("RANDOM") // kalian juga bisa menggunakan kode HEX, cari di google
        .setThumbnail(bicon) // thumbnail dari avatar bot kalian tadi
        .setAuthor("Other Command")
		.addField("Prefix - ","Change Prefix | -prefix")
        .addField("1. -ping", "cuma buat test Latency:3")
        .addField("2. -prefix", "Untuk mengganti prefix")
        .addField("3. -autorole", "Untuk set autorole")
        .addField("3. -weather", "untuk melihat cuaca")
        .addField("4. -xchat", "untuk menghapus history chat")
        .addField("5. -kick", "Cara -kick@Mention user untuk mengkick, Need Permission Role High")
        .addField("6. -ban", "Cara -ban@Mention user untuk mengkick, Need Permission Role Admin/Administrator")
        .addField("7. -serverinfo", "Mengetahui Informasi Server Discord")
        .addField("8. -botinfo", "Mengetahui Pembuat Bot");

		message.channel.send(botembed); // untuk mengirim embed yang sudah dibuat diatas..
}

exports.help = {
	name: "help"
}
