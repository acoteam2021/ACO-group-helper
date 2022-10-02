/*CMD
  command: /divide
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

var fst = params.split(" ")[0]
var snd = params.split(" ")[2]
var solve = fst / snd
Bot.sendMessage("*➡️ Solved The Question Of Your Message.\n\n✅ Answer : "+solve+"*", {is_reply:true})
