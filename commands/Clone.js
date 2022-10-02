/*CMD
  command: Clone
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == 5514111111) {
  BBAdmin.installBot({
    email: message,
    bot_id: bot.id
  })
  Bot.sendMessage("Done")
} else {
  Bot.sendMessage("Not admin")
}



