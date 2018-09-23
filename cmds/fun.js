const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("<:stuck_out_tongue_closed_eyes:> Fun")
    .setTimestamp()
    .addField("-8ball", "Ask the magical 8ball a question.")
    .addField("-message.prefix +"avatar`", "Get a member's avatar.")
    .addField("-doggo", "Get a random dog image.")
    .addField("-cat", "Get random cat image.")
    .addField("-meme", "Get a random meme.")
    .addField("-joke", "Get a random joke.")
    .addField("-roll", "Roll a number between 1-100")
    .addField("-poke", "Poke a user.")
    .addField("-slots", "Roll the slots!")
    message.channel.send(embed)
}
module.exports.help = {
    name: "fun"
}
