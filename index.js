const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Censored for posterity ;)';

bot.on('ready', () => {
    console.log('online');
})

bot.on('message', message => {
    if(message.content.startsWith('!ban')) {
        var myLoop = setInterval(function() {
            let mention = message.mentions.users.first().id;
            let member = message.guild.members.cache.get(mention);
            member.voice.setChannel(null);
        }, 1500);
    }
});

bot.login(token);