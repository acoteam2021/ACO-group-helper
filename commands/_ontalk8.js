/*CMD
  command: /ontalk8
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

var result = JSON.parse(content)

var cnt = result.cnt

var msg = "" + cnt + ""

var inlkey = [[{ text: "🎙️Chating Guideline", command: "/chat_guide" }]]

Api.sendMessage({
  text: msg,
  parse_mode: "HTML",
  disable_web_page_preview: true
})

