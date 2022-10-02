/*CMD
  command: scane
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Group Tip

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var result = JSON.parse(content)
var qr = result[0].symbol[0].data
Bot.sendMessage("Your Code is :  " + qr + "")

