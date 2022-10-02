/*CMD
  command: /warn
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Command

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /warn@grouphelpmrbeebot
CMD*/

Api.deleteMessage({ message_id: request.message_id })
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
if (request.reply_to_message) {
  var tgid = request.reply_to_message.from.id
  var botk = request.reply_to_message.from.id.is_bot | (tgid == 777000)
  if (admin.list[user.telegramid] == user.telegramid) {
    //admin and bot
    if ((admin.list[tgid] == tgid) | botk) {
      Bot.sendMessage("⚠️️You Can't warn admininstration or bot & channel⚠️️")
      return
    }
    //due
    if (params) {
      if (!params.split(" ")[0]) {
        var due = ""
      } else {
        var due = "\n<b>Due to</b>: " + params
      }
    } else {
      var due = ""
    }
    var tgid = request.reply_to_message.from.id
    var warn = Libs.ResourcesLib.anotherUserRes("warn_" + request.chat.id, tgid)
    warn.add(+1)
    if (warn.value() > 2) {
      warn.set(0)
      Api.restrictChatMember({
        chat_id: request.chat.id,
        user_id: tgid
      })
      Api.sendMessage({
        text:
          Bot.getProperty(tgid).html +
          " [<code>" +
          tgid +
          "</code>] warned (" +
          warn.value() +
          " of 3)." +
          due +
          "\n• <b>Action</b>: Muted 🔇",
        parse_mode: "html",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "✅ Unmute",
                callback_data: "/warn_cancel " + tgid
              }
            ]
          ]
        }
      })
    } else {
      Api.sendMessage({
        text:
          Bot.getProperty(tgid).html +
          " [<code>" +
          tgid +
          "</code>] warned (" +
          warn.value() +
          " of 3)." +
          due,
        parse_mode: "html",
        reply_markup: {
          inline_keyboard: [
            [{ text: "❌ Cancel", callback_data: "/warn_cancel " + tgid }]
          ]
        }
      })
    }
    //warning
    return
  }
} else {
  if (!params) {
    Bot.sendMessage("⚠️ Incorrect Format use \n/warn @user")
  } else {
    if (admin.list[user.telegramid] == user.telegramid) {
      //admin and bot
      if (admin.list[params] == params) {
        Bot.sendMessage("You Can't warn admininstration or bot & channel")
        return
      }
      var dds = Bot.getProperty(params.split(" ")[0])
      if (!dds) {
        Bot.sendMessage("*User not found*!")
        return
      }
      //due
      if (!params.split(params.split(" ")[0])[1]) {
        var due = ""
      } else {
        var due = "\n<b>Due to</b>:" + [params.split(params.split(" ")[0])[1]]
      }
      var warn = Libs.ResourcesLib.anotherUserRes(
        "warn_" + request.chat.id,
        dds.user_id
      )
      warn.add(+1)
      if (warn.value() > 2) {
        warn.set(0)
        Api.restrictChatMember({
          chat_id: request.chat.id,
          user_id: dds.user_id
        })
        Api.sendMessage({
          text:
            dds.html +
            " [<code>" +
            dds.user_id +
            "</code>] warned (" +
            warn.value() +
            " of 3)." +
            due +
            "\n• <b>Action</b>: Muted 🔇",
          parse_mode: "html",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "✅ Unmute",
                  callback_data: "/warn_cancel " + dds.user_id
                }
              ]
            ]
          }
        })
      } else {
        Api.sendMessage({
          text:
            dds.html +
            " [<code>" +
            dds.user_id +
            "</code>] warned (" +
            warn.value() +
            " of 3)." +
            due,
          parse_mode: "html",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "❌ Cancel",
                  callback_data: "/warn_cancel " + dds.user_id
                }
              ]
            ]
          }
        })
      }
      //warning
      return
    }
  }
}

