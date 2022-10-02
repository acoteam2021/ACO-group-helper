/*CMD
  command: /mail
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Betting
  answer: Enter your e-mail📧

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var verified = User.getProperty("verified")
if (verified == undefined || verified == "No") {

  Bot.runCommand("/verifyMe")
  return
}
Bot.sendMessage("✅ You Are Already Verified", { is_reply: true })

