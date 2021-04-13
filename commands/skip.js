module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('Nem vagy hangcsatornában!');

    let queue = await bot.distube.getQueue(message);

    if(queue) {
        bot.distube.skip(message)

        message.channel.send('Kész! :white_check_mark:')
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "skip",
    aliases: ["s"]
}
