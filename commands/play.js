module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('Nem vagy hangcsatornában!');
    
    const music = args.join(" ");

    bot.distube.play(message, music)
}

module.exports.config = {
    name: "play",
    aliases: ['p']
}
