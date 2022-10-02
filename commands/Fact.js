/*CMD
  command: Fact
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

Api.sendChatAction({
  chatid: chat.chatid,
  action: "typing"
})
Api.sendChatAction({
  chatid: chat.chatid,
  action: "typing"
})
HTTP.get({
  url: "https://useless-facts.sameerkumar.website/api",
  success: "/onLoading1 "})
