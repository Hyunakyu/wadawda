const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
		let bicon = bot.user.displayAvatarURL; // untuk menampilkan avatar dari bot kalian
		let botembed = new Discord.RichEmbed()
		.setColor("RANDOM") // kalian juga bisa menggunakan kode HEX, cari di google
        .setThumbnail(bicon) // thumbnail dari avatar bot kalian tadi
        .setAuthor("Help Command")
		.addField("Prefix","Gunakan . Saat Menggunakan Command, Saat Ini Tidak Bisa Diganti")
        .addField("1. -ping", "cuma buat test Latency:3")
        .addField("2. -play / -p", "Untuk Memutar Musik Contoh -play momoland")
        .addField("3. -skip", "skip lagu")
        .addField("4. -stop", "memberhentikan lagu")
        .addField("5. -np", "Mengetahui lagu yang lagi diplay")
        .addField("6. -queue / -q", "Melihat List Lagu yang dimasukan")
        .addField("7. -kick", "Cara -kick@Mention user untuk mengkick, Need Permission Role High")
        .addField("8. -ban", "Cara -ban@Mention user untuk mengkick, Need Permission Role Admin/Administrator")
        .addField("9. -serverinfo", "Mengetahui Informasi Server Discord")
        .addField("10. -botinfo", "Mengetahui Pembuat Bot");

		message.channel.send(botembed); // untuk mengirim embed yang sudah dibuat diatas..
}

exports.help = {
	name: "help"
}
