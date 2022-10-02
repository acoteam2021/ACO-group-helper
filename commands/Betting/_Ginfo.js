/*CMD
  command: /Ginfo
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Betting

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /gr_info, /gr_info@grouphelpmrbeebot
CMD*/

var cur9 = Bot.getProperty("disable_"+ request.chat.id)
var FNM = request.chat.id
var bot = request.chat.username
var faj = request.chat.title
if (bot == null) {
  Bot.sendMessage(
    
    "Details Of = " +
      faj +
      "\n\nGroup Name : " +
      faj +
      "\nGroup id = " +
      FNM +
      "\nGroup Username : None \nCaptch mode has been " + cur9 +" in " +
      faj +
"group"
  )
} else {
  Bot.sendMessage(
    
    "📖️Details Of ⇰》" +
      faj +
      " \n\n 🔖Group Name➣ : " +
      faj +
      "\n 🔖Group id ➣ " +
      FNM +
      " \n 🔖Group Username ➣ @" +
      bot +
      "\n\n ⇐❤️❤️⇒\n Captch mode has been " + cur9 +" in " +
      faj +
"group"
  )
}

