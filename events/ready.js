module.exports = bot => {
    console.log('Bot is online!')
    bot.user.setActivity("<?", { type: "LISTENING"})
}