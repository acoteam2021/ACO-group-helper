/*CMD
  command: sys/gender
  help: 
  need_reply: false
  auto_retry_time: 
  folder: My codes

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var msg = content
var name = msg.split(/"/)[3]
var gender = msg.split(/"/)[7]
var pro = msg.split(/"/)[10]
Api.sendMessage({
  text:
    "\n\n*🔩 Gender Predicted\n\n💊 Name = " +
    name +
    "\n\n🛒 Gender = " +
    gender +
    "\n\n🎭 Probability = " +
    pro +
    "\n\n☆ἷᾄм♀♂ᾗὄὄв*",
  parse_mode: "markdown"
})

