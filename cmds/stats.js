const Discord = require("discord.js");
let cpuusage = process.cpuUsage();
let cpu = Math.floor(cpuusage.user/cpuusage.system) + "%";
var upSecs = 0;
var upMins = 0;
var upHours = 0;
var upDays = 0;
setInterval(function() {
    upSecs = upSecs + 1
    if (upSecs >= 60) {
        upSecs = 0
        upMins = upMins + 1
    }
    if (upMins >= 60) {
        upMins = 0
        upHours = upHours + 1
    }
    if (upHours >= 24) {
        upHours = 0
        upDays = upDays + 1
    }
}, 1000)
module.exports.run = async (bot, message, args) => {
     if(message.author.id !== "264015893434990592") if(message.author.id !== "438019097683558420") return message.channel.send(":no_entry_sign: You cannot use this command because, you are not a developer.")

  rebootBot(message.channel);
       function rebootBot(channel) {
           message.react('✅')
               .then(message => bot.destroy())
               .then(message => bot.destroy())
               .then(() => bot.login(config.token));
           message.channel.send("``[Q u e l a] has successfully rebooted!``")
       }
    }
exports.help = {
	name: "reboot"
}


    message.channel.send(`= STATISTICS =
• Bot        :: ${bot.user.tag}
• Developer  :: Q u e l a#1855
• Cpu Usage  :: ${cpu}
• Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Uptime     :: ${upDays} Day(s), ${upHours} Hour(s), ${upMins} Minute(s) and ${upSecs} Second(s)
• Users      :: ${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
• Servers    :: ${bot.guilds.size.toLocaleString()}
• Channels   :: ${bot.channels.size.toLocaleString()}
• Discord.js :: v${Discord.version}
• Node       :: ${process.version}`, {code: "asciidoc"});
}

module.exports.help = {
    name: "stats"
}
