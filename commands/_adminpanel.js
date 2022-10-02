/*CMD
  command: /adminpanel
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

var verify = Bot.getProperty("Verify"+user.telegramid)
if (user.telegramid == verify){
Bot.runCommand("/ve**r**i**fy")
} else {
Bot.sendMessage("*You Are Not A Verified User*❣️ Verify Request Sent❣️")
var button = [[{text:"✔️Verify", callback_data:"/verify "+user.telegramid+""}]]

Api.sendMessage({
chat_id:5514111111,
text:"*⛱️New Verify Request \n\n💡User Id:* "+user.telegramid+"\n\n*🤴UserName:* @"+user.username+" \n\n*👨‍💻Name:* "+user.first_name+"",reply_markup: {inline_keyboard:button}
})
}

