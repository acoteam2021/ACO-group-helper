/*CMD
  command: /ban
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Command

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /ban@grouphelpmrbeebot
CMD*/

Api.deleteMessage({ message_id: request.message_id })
if (chat.chat_type == "private") {
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
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
      Api.banChatMember({
        chat_id: request.chat.id,
        user_id: tgid,
        on_result: "/baned " + tgid + " und2 und3 und4"
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
        Api.banChatMember({
          chat_id: request.chat.id,
          user_id: tgid,
          on_result: "/baned " + tgid + " und2 und3 " + params
        })
        //mute forever
        return
      }
      var key = params.split(" ")[1]
      if (!key) {
        Bot.sendMessage("⚠️ Incorrect Format use\nReply User `/ban 30 seconds`")
        return
      }
      
      var cov = params.split(key)[1]
      if (!cov) {
        var optional = "und3"
      } else {
        var optional = cov
      }
      Api.banChatMember({
        chat_id: request.chat.id,
        user_id: tgid,
        until_date: GetTime(key, time),
        on_result: "/baned " + tgid + " " + time + " " + key + " " + optional
      })
    }
    return
  }
  return
}

if (!params) {
  Bot.sendMessage("⚠️ Incorrect Format use\n`/ban @user 30 seconds`")
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
      Api.banChatMember({
        chat_id: request.chat.id,
        user_id: tg.user_id,
        on_result: "/baned " + tg.user_id + " und2 und3 und4"
      })
      return
    }

    if (!isNumeric(time)) {
      Api.banChatMember({
        chat_id: request.chat.id,
        user_id: tg.user_id,
        on_result: "/baned " + tg.user_id + " und2 und3 " + params
      })
      return
    }
    
    
    var key = params.split(" ")[2]
    if (!key) {
      Bot.sendMessage("⚠️ Incorrect Format use\n`/ban @user 30 seconds`")
      return
    }
    var cov = params.split(key)[1]
    if (!cov) {
      var optional = "und3"
    } else {
      var optional = cov
    }
    Api.banChatMember({
      chat_id: request.chat.id,
      user_id: tg.user_id,
      until_date: GetTime(key, time),
      on_result:
        "/baned " + tg.user_id + " " + time + " " + key + " " + optional
    })
    return
  }
}

