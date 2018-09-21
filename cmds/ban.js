const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    if(!message.member.roles.some(r=>["Administrator", "ADMIN", "Admin"].includes(r.name)) )
      return message.reply("Hanya Bisa Digunakan Oleh Admin/Administrator");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Mention User yang ingin diban");
    if(!member.bannable) 
      return message.reply("Gue Ga Bisa banned Dia! Hanya Bisa Digunakan Oleh Role Admin/Administrator");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
}

exports.help = {
	name: "ban"
}