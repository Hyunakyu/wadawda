const Discord = require("discord.js");


exports.run = async (bot, message, args) => {
	if(!message.member.roles.some(r=>["Administrator", "ADMIN", "Admin", "Moderator", "MODERATOR"].includes(r.name)) )
    return message.reply("Delete Pesan Hanya Bisa Role Owner, Admin, Moderator~!");

    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Delete Hanya Bisa 2 Sampai 100");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Tidak Bisa Delete Pesan Karena : ${error}`));

      let member = message.mentions.members.first() || message.guild.members.get(args[0]);
}

exports.help = {
	name: "xchat"
}