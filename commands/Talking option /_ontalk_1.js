/*CMD
  command: /ontalk_1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Talking option 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message_id })
var bot = request.chat.username
var disable = Bot.getProperty("able_" + request.chat.id)

if (!able) {
var result = JSON.parse(content)

var cnt = result.cnt

var msg = "🔊Bot's message ✍~\n\n『 " + cnt + "』"

var inlkey = [[{ text: "🎙️Chating Guideline", command: "/chat_guide" }]]

Api.sendMessage({
  text: msg,
  parse_mode: "HTML",
  disable_web_page_preview: true
})
return
}

