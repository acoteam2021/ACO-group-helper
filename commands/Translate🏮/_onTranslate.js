/*CMD
  command: /onTranslate
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Translate🏮

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

//var json = JSON.parse(content)
Bot.sendMessage(content, {
  is_reply: true
})
