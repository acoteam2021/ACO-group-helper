/*CMD
  command: /reg
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

var button = [[{title : "📫Login" , command : "login" }, { title : "🧿Register", command : " 🧿Register" }]]



Bot.sendInlineKeyboard(button, "*Hey*, \n_Welcome To Security Pin option_")
