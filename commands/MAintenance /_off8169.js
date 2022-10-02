/*CMD
  command: /off8169
  help: 
  need_reply: false
  auto_retry_time: 
  folder: MAintenance 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if(user.telegramid == 5514111111){
Bot.setProperty("mode","🛠️Off❎","string")
Bot.sendMessage("*🛠️Maintainance Mode Set To Off*")
}else{
Bot.sendMessage("*⛔️ You Are Not An Admin*")
}

