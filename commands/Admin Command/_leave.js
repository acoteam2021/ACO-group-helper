/*CMD
  command: /leave
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Command

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /leave@grouphelpmrbeebot
CMD*/


if (chat.chat_type == "private") {
  Bot.sendInlineKeyboard(
    [
      [
        {
          title: "🚀 Add Me To A Group 🚀",
          url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
        }
      ]
    ],
    "This option work only in group!"
  )
  return
}

var fajis = request.chat.id
  var text = "Nop,😥\n I Shall Go Away 🙄!..Admin "+user.first_name +  "\n Bye!"
var bot = request.chat.username
var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
if (admin.list[user.telegramid] == user.telegramid) {
Bot.sendMessage(text)
  Api.leaveChat({
    chat_id: fajis
  })

  
}else{

Bot.sendMessage(
  "🍂Dear"+user.first_name+  "\n📌️You aren't an admin of this group....so,you can't remove me...😎 in group ➣ @" +
      bot)
}

