/*CMD
  command: addded
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

let calc = Libs.ResourcesLib.userRes("balance")
var usn = User.getProperty("cyd")
calc.add(+usn)
Bot.sendMessage("*➡️ Solved The Question Of Your Message.\n\n✅ Answer : "+calc.value().toFixed(11)+"*", {is_reply:true})
Bot.runCommand("cutted")
