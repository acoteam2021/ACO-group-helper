/*CMD
  command: /type
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Typing ✔️
  answer: Send Something

  <<KEYBOARD

  KEYBOARD
  aliases: /type@grouphelpmrbeebot
CMD*/

Api.sendMessage({
 text:"|",
 on_result: "/on_result " + params
})
