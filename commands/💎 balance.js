/*CMD
  command: 💎 balance
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

if(chat.chat_type!="private"){ return }

let res = Libs.ResourcesLib.userRes("BBPoint");
Bot.sendMessage("You have: " + res.value() + "💎");

