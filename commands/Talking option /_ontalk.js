/*CMD
  command: /ontalk
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

var result = JSON.parse(content)

var cnt = result.cnt

var msg = " 📖️Guideline☞\nIt is mandatory to add /talk or /t  to the beginning of the sentence or word while conversing with the bot\n📖️📖️📖️📖️\n🔊Bot's message ✍~\n\n『 " + cnt + "』"

var inlkey = [[{ text: "🎙️Chating Guideline", command: "/chat_guide" }]]

Api.sendMessage({
  text: msg,
  parse_mode: "HTML",
  disable_web_page_preview: true
})

