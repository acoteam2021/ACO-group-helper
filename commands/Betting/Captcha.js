/*CMD
  command: Captcha
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Betting

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/


User.setProperty("new_user", true, "boolean")

Api.deleteMessage({ message_id: request.message_id })
var bot = request.chat.username
var disable = Bot.getProperty("disable_" + request.chat.id)

if (!disable) {
  var t = Libs.ResourcesLib.anotherChatRes("timm", "global")
  let A = t.value()
  var n = Libs.Random.randomInt(1, A)
  var ph = Bot.getProperty("Pic" + n)
  var cp = Bot.getProperty("Cap" + n)
  Api.sendPhoto({
    photo: ph,
    caption:
      "Dear @" +
      user.username +
      "\n♻️Enter the numbers or words in this image in order....\nSolve The Captcha\n ⚠️️⚠️️⚠️️⚠️️\n If you don't do this, you will be silent in this group...\n🔰You have only two times...💫 "
  })
  User.setProperty("Answer", cp, "string")
  Bot.runCommand("Verify")

  return
}

