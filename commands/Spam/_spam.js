/*CMD
  command: /spam
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Spam

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /spam@grouphelpmrbeebot
CMD*/

if (!params) {
  Bot.sendMessage(
    "please send the word with you want to spam \n\nlike - /spam hello"
  )
  return
}

User.setProperty("current", params, "string")
User.setProperty("info", "spam", "string")
Bot.runCommand("startspammingguys❤️❤️✌️✌️")

