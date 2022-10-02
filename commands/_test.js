/*CMD
  command: /test
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = {
  user_id: request.reply_to_message.from.id,
  valid: "valid",
  date: "30 seconds"
}
Bot.setProperty("Data_" + request.chat.id, json, "json")
Api.restrictChatMember({
  chat_id: request.chat.id,
  user_id: request.reply_to_message.from.id,
  //mute 30 seconds
  until_date: GetTime("seconds", "30"),
  on_result: "/ontest " + request.chat.id
})

