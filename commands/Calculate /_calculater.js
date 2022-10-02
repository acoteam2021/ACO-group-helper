/*CMD
  command: /calculater
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Calculate 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /calculater@grouphelpmrbeebot
CMD*/

var chat = request.chat
Bot.sendMessage(
  "*👋🏻 Hello " +
    chat.first_name +
    "\n\n➡️ ID = " +
    chat.id +
    "\n➡️ Name = " +
    chat.first_name +
    "\n➡️ Username = @" +
    chat.username +
    "*\n🔐 Welcome To Help Listing\n\n🔄SUBTRACTING :\n\n/subtract [NUMBER1] - [NUMBER2]\n\nFor Example: `/subtract 100 - 50`.\n\n🔄ADDITION :\n\n/add [NUMBER1] + [NUMBER2]\n\nFor Example: `/add 100 + 50`.\n\n🔄MULTIPLYING :\n\n/multiply [NUMBER1] multiply [NUMBER2]\n\nFor Example: `/multiply 100 * 50`.\n\n🔄DIVISION :\n\n/divide [NUMBER1] divide [NUMBER2]\n\nFor Example: `/divide 100 / 50`."
)
var new_user = User.getProperty("new_user")
if (!new_user) {
  Bot.sendMessageToChatWithId(
    5514111111,
    "🚦New User🚦\n\n⚜ User = " +
      user.first_name +
      "\n🔰 Username = @" +
      user.username +
      "\n🆔 User ID = " +
      user.telegramid +
      "\n📛 User Link = [" +
      user.first_name +
      "](tg://user?id=" +
      user.telegramid +
      ")"
  )
  User.setProperty("new_user", true, "boolean")
}

var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  User.setProperty("already", "DONE", "string")
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
}

