/*CMD
  command: /talk8
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Talking option 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/


var bot = request.chat.username
var adisable = Bot.getProperty("adisable_" + request.chat.id)

if (!adisable) {
  if (message && message.includes("Live")) {
    Bot.sendMessage(
      "  I Live in https://t.me/acobot_Team From Sri Lanka ð±ð°",
      {
        is_reply: true
      }
    )
    return
  }

  if (message && message.includes("live")) {
    Bot.sendMessage(
      "I Live in https://t.me/acobot_Team From Sri Lanka ð±ð°",
      {
        is_reply: true
      }
    )
    return
  }

  if (message && message.includes("state")) {
    Bot.sendMessage(" ðBot's message â~\n\n Kandy ð±ð° ", {
      is_reply: true
    })
    return
  }
  if (message && message.includes("State")) {
    Bot.sendMessage(" ðBot's message â~\n\nã Kandy ð±ð° ã", {
      is_reply: true
    })
    return
  }

  if (message && message.includes("City")) {
    Bot.sendMessage(" \nðBot's message â~\n\nã I'm from Kandy City ð±ð° ã", {
      is_reply: true
    })
    return
  }
  if (message && message.includes("city")) {
    Bot.sendMessage(" ðBot's message â~\n\nãI'm From  Kandy City ð±ð° ã", {
      is_reply: true
    })
    return
  }

  if (message && message.includes("country")) {
    Bot.sendMessage(
      " ðBot's message â~\n\nã My Country is Sri Lanka ð±ð° ã",
      {
        is_reply: true
      }
    )
    return
  }

  if (message && message.includes("Country")) {
    Bot.sendMessage(
      " ðBot's message â~\n\nã My Country is Sri Lanka ð±ð° ã",
      {
        is_reply: true
      }
    )
    return
  } else {
    var d = "" + encodeURI(params + "")
    HTTP.get({
      url:
        "http://api.brainshop.ai/get?bid=168961&key=9GEjxayoYuNe3NEB&uid=shab3Gsh7&msg=" +
        d +
        "",
      success: "/ontalk8"
    })
  }
}

