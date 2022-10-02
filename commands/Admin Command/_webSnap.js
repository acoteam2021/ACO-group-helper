/*CMD
  command: /webSnap
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Command

  <<ANSWER
* 📸 Enter A Valid Website Url To Capture

✅  For Example : google.com*

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/


if (chat.chat_type == "private") {
  Api.sendPhoto({
    photo:
      "https://capture-website-api.herokuapp.com/capture?url=" +
      message +
      "&width=640&height=360&scaleFactor=1&defaultBackground=false&disableAnimations=true"
  })
  return
} else {
  
  Bot.sendMessage("Please open me on Private  Chat")
}

