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
    "\n\n*š© Gender Predicted\n\nš Name = " +
    name +
    "\n\nš Gender = " +
    gender +
    "\n\nš­ Probability = " +
    pro +
    "\n\nāį¼·į¾Š¼āāį¾į½į½Š²*",
  parse_mode: "markdown"
})

