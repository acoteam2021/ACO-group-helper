/*CMD
  command: /on816960
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
Bot.setProperty("mode8","🔋On✅","string")
Bot.sendMessage("*🔋Power Saving Mode Set To On*")
}else{
Bot.sendMessage("*⛔️ You Are Not An Admin*")
}
