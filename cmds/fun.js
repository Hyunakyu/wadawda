const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle(":stuck_out_tongue_closed_eyes: Fun")
    .setTimestamp()
    .addField("1. -quiz", "get a question.")
    .addField("2. -8ball", "Ask the magical 8ball a question.")
    .addField("3. -avatar", "Get a member's avatar.")
    .addField("4.-doggo", "Get a random dog image.")
    .addField("5. -cat", "Get random cat image.")
    .addField("6. -meme", "Get a random meme.")
    .addField("7. -joke", "Get a random joke.")
    .addField("8. -roll", "Roll a number between 1-100")
    .addField("10. -poke", "Poke a user.")
    .addField("11. -slots", "Roll the slots!");
    message.channel.send(embed);
}
module.exports.help = {
    name: "fun"
}
