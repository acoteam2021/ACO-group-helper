/*CMD
  command: /add
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Calculate 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var amt = params.split(" ")[0]
var cur = params.split(" ")[2]
let calc = Libs.ResourcesLib.userRes("balance")
calc.add(+amt)
User.setProperty("cyd",cur,"string")
Bot.runCommand("addded")
