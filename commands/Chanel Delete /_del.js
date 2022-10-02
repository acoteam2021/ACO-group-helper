/*CMD
  command: /del
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Chanel Delete 

  <<ANSWER
*🖇 Enter Channel Username From Which You Want To Delete Message.

⚠️ Note = Bot Should Be Must Admin Of That Channel.*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.run({
  command: "/Delete",
  options: { channel: message }
})

