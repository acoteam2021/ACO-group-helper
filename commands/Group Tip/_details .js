/*CMD
  command: /details 
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Group Tip

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var button = [{ title: "Developer", url: "https://t.me/Bee_Family" }]
var FNM = request.chat.id
var bot = request.chat.username
var faj = request.chat.title
if (bot == null) {
  Bot.sendInlineKeyboard(
    button,
    "Details Of = " +
      faj +
      "\n\nGroup Name : " +
      faj +
      "\n\nGroup id = " +
      FNM +
      "\n\nGroup Username : None\n\nCredit : @Hodkxjsh_bot"
  )
} else {
  Bot.sendInlineKeyboard(
    button,
    "Details Of = " +
      faj +
      "\n\nGroup Name : " +
      faj +
      "\n\nGroup id = " +
      FNM +
      "\n\nGroup Username : @" +
      bot +
      "\n\nCredit : @Hodkxjsh_bot"
  )
}

