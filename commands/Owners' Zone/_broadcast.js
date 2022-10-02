/*CMD
  command: /broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owners' Zone
  answer: Enter the message....

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (chat.chat_type != "private") return
if (
  user.telegramid == "1984415770" ||
  user.telegramid == "5514111111" ||
  user.telegramid == "2110220740" ||
  user.telegramid == "5412537093"
) {
  Bot.runAll({
    command: "/broadcast3",
    for_chats: "private-chatsu",
    options: { msg: message }
  })
  Bot.sendMessage("✔️ ️*Sending message started.*")
} else {
  Bot.sendMessage("You aren't an admin of This bot")
}

