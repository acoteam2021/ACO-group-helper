/*CMD
  command: /Delete
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Chanel Delete 
  answer: *💮 Enter Message Id Of Post.*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var chat = options.channel
Api.deleteMessage({
chat_id: chat,
message_id: message })
Bot.sendMessage("*🗑 Channel Message Has Been Deleted Successfully.• Go To Channel & Check The Message.*")

