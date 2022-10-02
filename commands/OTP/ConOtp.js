/*CMD
  command: ConOtp
  help: 
  need_reply: true
  auto_retry_time: 
  folder: OTP

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var otp = User.getProperty("otp")
if(message == otp){
Bot.sendMessage("*🔰Otp Correct🔰\nYou Are Verified✅*")
Bot.runCommand("/start_1")

}else{
Bot.sendMessage("⚠️️Wrong Otp Entered⚠️️")
Bot.sendMessage("◾◼️Type The Otp \nAgain▪️◼️")
Bot.runCommand("ConOtp")
}
