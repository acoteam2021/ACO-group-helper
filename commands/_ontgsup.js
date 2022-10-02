/*CMD
  command: /ontgsup
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

var r = JSON.parse(content)
var s = r.telegraph_url
Bot.sendMessage(s,{disable_web_page_preview:false})
