/*CMD
  command: /mute
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Command

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /mute@grouphelpmrbeebot
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
    "This bot work only in [group](https://t.me/Bee_Family)!"
  )
  return
}
var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
//reply
if (request.reply_to_message) {
  if (admin.list[user.telegramid] == user.telegramid) {
    var tgid = request.reply_to_message.from.id
    //admin command
    if (!params) {
      Api.restrictChatMember({
        chat_id: request.chat.id,
        user_id: tgid,
        on_result: "/muted " + tgid + " und und und"
      })
      //mute forever
    } else {
      //with params
      if (!Bot.getProperty(tgid)) {
        Bot.sendMessage("*User not found*!")
        return
      }
      var time = params.split(" ")[0]
      if (!isNumeric(time)) {
        Api.restrictChatMember({
          chat_id: request.chat.id,
          user_id: tgid,
          on_result: "/muted " + tgid + " und und " + params
        })
        //mute forever
        
        
        return
      }
      var key = params.split(" ")[1]
      if (!key) {
        Bot.sendMessage(
          "⚠️ Incorrect Format use\nReply User `/mute 30 seconds`"
        )
        return
      }
      var cov = params.split(key)[1]
      if (!cov) {
        var optional = "undefined"
      } else {
        var optional = cov
      }
      Api.restrictChatMember({
        chat_id: request.chat.id,
        user_id: tgid,
        until_date: GetTime(key, time),
        on_result: "/muted " + tgid + " " + time + " " + key + " " + optional
      })
    }
  } else {
    Bot.sendMessage("*You are not admin on this group*!")
    //end of admin
    //not admin
  }
  return
}
if (!params) {
  Bot.sendMessage("⚠️ Incorrect Format use\n`/mute @user 30 seconds`《《《\n\n or \n\n `/mute  30 seconds`《《《 on replies")
} else {
  //with params
  if (admin.list[user.telegramid] == user.telegramid) {
    var tg = Bot.getProperty(params.split(" ")[0])
    if (!tg) {
      Bot.sendMessage("*User not found*!")
      return
    }
    var time = params.split(" ")[1]
    if (!time) {
      Api.restrictChatMember({
        chat_id: request.chat.id,
        user_id: tg.user_id,
        on_result: "/muted " + tg.user_id + " und und und"
      })
      return
    }
    if (!isNumeric(time)) {
      Api.restrictChatMember({
        chat_id: request.chat.id,
        user_id: tg.user_id,
        on_result: "/muted " + tg.user_id + " und und " + params
      })
      return
    }
    var key = params.split(" ")[2]
    if (!key) {
      Bot.sendMessage("⚠️ Incorrect Format use\n`/mute @user 30 seconds`\n\n or \n\n `/mute  30 seconds`on replies")
      return
    }
    var cov = params.split(key)[1]
    if (!cov) {
      var optional = "undefined"
    } else {
      var optional = cov
    }
    Api.restrictChatMember({
      chat_id: request.chat.id,
      user_id: tg.user_id,
      until_date: GetTime(key, time),
      on_result:
        "/muted " + tg.user_id + " " + time + " " + key + " " + optional
    })
  } else {
    Bot.sendMessage("*You are not admin on this group*!")
  }
}
