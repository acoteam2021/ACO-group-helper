/*CMD
  command: /lyrics2
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

var r = JSON.parse(content)
var lyric = r.lyrics
Bot.sendMessage(lyric)
if(r.error){
Bot.sendMessage("error occurred or song not found")
return }//pravcoder
