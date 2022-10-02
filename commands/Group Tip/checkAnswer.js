/*CMD
  command: checkAnswer
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Group Tip

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (!request.message) {
  return
}
var correctAnswer = params.split(" ")[0]
var userAnswer = params.split(" ")[1]
if (userAnswer != correctAnswer){
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "❗Wrong Answer❗",
    show_alert: false
  })
  return
}
Api.editMessageMedia({
  message_id: request.message.message_id,
  media: {
    type: "photo",
    media: "https://i.imgur.com/PPhUvEc.jpg",
    caption: "*✅Image Verification *Success!!", 
    parse_mode: "Markdown"
  }
})

