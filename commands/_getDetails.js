/*CMD
  command: /getDetails
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer:  *Send A Forward Message For Someone*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (!request.forward_from) {
  Bot.sendMessage("‼️* This Not a Forward*")
  return
}
var id = request.forward_from.id
var uname = request.forward_from.username
var name = request.forward_from.first_name
  Bot.sendMessage("*Name* "+name+"\n*Id* "+id+"\n*Username @"+uname+"*")
