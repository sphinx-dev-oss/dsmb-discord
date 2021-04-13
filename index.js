const Discord = require('discord.js');
const Discord_Player = require('discord-player') 
const bot = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const config = require('./settings.json');
const { loadCommands } = require('./utils/loadCommands');
const DisTube = require('distube')

bot.distube = new DisTube(bot, { searchSongs: false, emitNewSongOnly: true });
bot.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `\`\`\`Lejátszás elindult!\n\nZene: ${song.name} - ${song.formattedDuration}\`\`\` Általa: ${song.user}`
	))
	.on("addSong", (message, queue, song) => message.channel.send(
        ` \`\`\`Várólistára helyezve a következő zene: ${song.name} - ${song.formattedDuration}\`\`\` Általa: ${song.user}`
    ))

require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

loadCommands(bot);

bot.login(config.token);