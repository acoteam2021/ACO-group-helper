/*CMD
  command: cutted
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

let calc = Libs.ResourcesLib.userRes("balance")
var amt = ""+calc.value().toFixed(6)+""
calc.add(-amt)
