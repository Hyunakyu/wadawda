const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {

    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Make sure you mention someone!");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);

    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Kiss! :kissing_heart:  ")
    .setDescription(`**${message.author.username}** Kiss **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("Bot Version: Beta", bot.user.displayAvatarURL);

    message.channel.send(hugEmbed)

}
module.exports.help = {
	name: "kiss"
}
