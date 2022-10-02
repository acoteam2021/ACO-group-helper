/*CMD
  command: Msg_2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Refer
  answer: *🎭 Send Massage*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var admin = Your Id
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == Your Id){
var tg =
User.getProperty("MsgId")
Bot.sendMessage("*Message:* "+message+"*\n Has been sent*")
Bot.sendMessageToChatWithId(tg, "*Admin Has Messaged You\n=======================*\n\n_"+message+"_")
}else{
Bot.sendMessage("You Are Not An Admin")
}
