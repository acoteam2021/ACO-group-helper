/*CMD
  command: Broadcastads
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter Your Message To Broadcast:


  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/


var users = Bot.getProperty("Broadcast")
if (user.telegramid == 1683850366 ) {
  for (var i in users) {
    Api.sendMessage({
      chat_id: users[i],
      text:
        message +
        "*\n\n #PaidAd sponsored by @Kingstar_officialboy \n========\n\nsponsored #AD\n contact @Kingstar_officialboy for paid promotions...",
      parse_mode: "markdown"
    })
  }
  Bot.sendMessage(
    "*⛔ Broadcast Process Is On! Soon The Bot Will Send Message To All Peoples...*"
  )
}

