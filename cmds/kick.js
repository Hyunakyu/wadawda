const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    if(!message.member.roles.some(r=>["Administrator", "ADMIN", "Admin", "Moderator", "MODERATOR"].includes(r.name)) )
    return message.reply("Kick Hanya Bisa Role Owner, Admin, Moderator~!");
  
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member)
    return message.reply("Mention User Jangan Lupa Pea~ :3");
  if(!member.kickable) 
    return message.reply("Gue Ga Bisa Ngekick Dia! Role Dia Lebih Tinggi Dari Lo~?");

  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";
  
  await member.kick(reason)
    .catch(error => message.reply(`Maaf ${message.author} Gue Ga Bisa Ngeluarin Dia Karena : ${error}`));
  message.reply(`${member.user.tag} berhasil dikeluarkan oleh ${message.author.tag} because: ${reason}`);
}

exports.help = {
	name: "kick"
}