const Discord = require("discord.js");
const sql = require("sqlite");
const dbPromise = sql.open('sql/tutorial.sqLite', {Promise});

exports.run = async (bot, message, args) => {
    const db = await dbPromise;
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!args[0]) return;
    db.get(`SELECT * FROM prefixes WHERE guildId = "${message.guild.id}"`).then(row => {
        if (!row) {
            db.run("INSERT INTO prefixes (guildId, prefix) VALUES (?, ?)", [message.guild.id, args[0]]);
            message.channel.send(`**${message.member.user.tag}** changed prefix on this server form \`!\` to \`${args[0]}\``);

        }else{
            db.run(`UPDATE prefixes SET prefix = "${args[0]}" WHERE guildId = "${message.guild.id}"`);
            message.channel.send(`**${message.member.user.tag}** changed prefix on this server form \`${row.prefix}\` to \`${args[0]}\``);
        }
        if (args[0] === '-'){
            db.run(`DELETE FROM prefixes WHERE guildId = "${message.guild.id}"`)
        }
    });
}
