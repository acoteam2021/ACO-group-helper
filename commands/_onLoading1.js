/*CMD
  command: /onLoading1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendChatAction({
  chatid: chat.chatid,
  action: "typing"
})
Api.sendChatAction({
  chatid: chat.chatid,
  action: "typing"
})

var c = JSON.parse(content)

var y = c.data

Api.sendPhoto({
  photo: "https://telegra.ph/DDuxjcjc-04-21",
  caption: "🤷 Did you know ❓: " + y + "",
  parsemode: "Markdown",
  replymarkup: {
    inlinekeyboard: [[{ text: "Next ⏭", callbackdata: "Fact" }]]
  }
})

