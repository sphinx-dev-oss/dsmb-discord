const { Discord } = require("discord-player")

module.exports.run = async (bot, message, args) => {
    message.channel.send("**Parancsaim:**\n\n*<?play <Zene cím/URL>* - ***Ezzel a parancsal indítasz el egy zenét (Automatikusan belép a BOT a csatornába!)***\n\n*<?skip* - ***Ezzel tudod átugrani a zenét! (Ha 1 zene van akkor a BOT berak egy másikat (Magátol))***\n\n*<?stop* - ***Ezzel tudod leállítani a zenét (A BOT Automatikusan kilép!)");
}

module.exports.config = {
    name: "help",
    aliases: ['h']
}
