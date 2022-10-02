/*CMD
  command: /kick
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Command

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /kick@grouphelpmrbeebot
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
    "This bot work only in group!"
  )
  return
}
var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
//reply
if (request.reply_to_message) {
  var tgid = request.reply_to_message.from.id
  var botk = request.reply_to_message.from.id.is_bot | (tgid == 726449)
  var datauser = Bot.getProperty(tgid)
  if (admin.list[user.telegramid] == user.telegramid) {
    //valid user
    if (!Bot.getProperty(tgid)) {
      Bot.sendMessage("*User not found*!")
      return
    }
    //admin and bot
    if ((admin.list[tgid] == tgid) | botk) {
      Bot.sendMessage("You Can't kick admininstration or bot & channel")
      return
    }
    //admin command
    if (!params) {
      Api.banChatMember({
        chat_id: request.chat.id,
        user_id: tgid,
        revoke_messages: true
      })
      Api.sendMessage({
        text:
          datauser.html +
          " [<code>" +
          datauser.user_id +
          "</code>] Kicked Out.",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "✅ Unban",
                callback_data:
                  "/2ndunban " + datauser.user_id + " und2 und3 und4"
              }
            ]
          ]
        },
        parse_mode: "html"
      })
      return
    }
    Api.banChatMember({
      chat_id: request.chat.id,
      user_id: tgid,
      revoke_messages: true
    })
    Api.sendMessage({
      text:
        datauser.html +
        " [<code>" +
        datauser.user_id +
        "</code>] Kicked Out.\n• <b>Due to</b>: " +
        params,
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "✅ Unban",
              callback_data:
                "/2ndunban " + datauser.user_id + " und2 und3 " + params
            }
          ]
        ]
      },
      parse_mode: "html"
    })
  }
  return
}
//next
if (!params) {
  var datauser1 = Bot.getProperty(params)
  if (admin.list[user.telegramid] == user.telegramid) {
    //admin and bot
    if (admin.list[params] == params) {
      Bot.sendMessage("🍂You Can't kick admininstration or bot & channel")
      return
    }
    if (!datauser1) {
      Bot.sendMessage("*User not found*!")
      return
    }
    Api.banChatMember({
      chat_id: request.chat.id,
      user_id: datauser1.user_id,
      revoke_messages: true
    })
    Api.sendMessage({
      text:
        datauser1.html +
        " [<code>" +
        datauser1.user_id +
        "</code>] Kicked Out.",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "✅ Unban",
              callback_data:
                "/2ndunban " + datauser1.user_id + " und2 und3 und4"
            }
          ]
        ]
      },
      parse_mode: "html"
    })
    return
  }
  Api.banChatMember({
    chat_id: request.chat.id,
    user_id: datauser1.user_id,
    revoke_messages: true
  })
  Api.sendMessage({
    text:
      datauser1.html +
      " [<code>" +
      datauser1.user_id +
      "</code>] Kicked Out.\n• <b>Due to</b>: " +
      params,
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "✅ Unban",
            callback_data:
              "/2ndunban " + datauser1.user_id + " und2 und3 " + params
          }
        ]
      ]
    },
    parse_mode: "html"
  })
  return
}

