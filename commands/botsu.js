/*CMD
  command: botsu
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

var r = JSON.parse(content)
var resul1t = r.result.username
Bot.sendMessage("*🥳 Congratulations Your @"+resul1t+" Connected And Activated With Me Now You Can Use Your Bot.....\n\n📝 Note:-* _Don't Share Your Bot Api With Anyone._")

User.setProperty("mybot",resul1t,"string")
