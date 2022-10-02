/*CMD
  command: /start_2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /restart, /restart@grouphelpmrbeebot
CMD*/

Api.deleteMessage({ message_id: request.message_id })

var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
if (admin.list[user.telegramid] == user.telegramid) {
  Bot.runCommand("/start_22")
  return
} else {

Bot.sendMessage("Only Group Admins can open me in groups...\n 🤺 If you want to get commands list ,\n please send me like /help to get.")
}

