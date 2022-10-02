/*CMD
  command: /captchaM
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Maths Captcha 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var qq = Libs.Random.randomInt(1, 100)
var question = Libs.Random.randomInt(1, 100)
var solve = qq + question
Bot.setProperty("solve", solve, "string")
Bot.sendMessage(
  "*➡️ Solve This Captcha Before Using This Bot.\n\n✅ Solve It : " +
    question +
    " + " +
    qq +
    " = ?*"
)
Bot.runCommand("Solve1")

