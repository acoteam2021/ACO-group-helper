/*CMD
  command: OTP
  help: 
  need_reply: false
  auto_retry_time: 
  folder: OTP

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var OTPn = Libs.Random.randomInt(1000, 9999)

Bot.sendMessage("*An OTP Sent To @Bee_Family,\n\n*_Send The OTP Here_")

User.setProperty("otp", OTPn, "string")

Api.sendMessage({
  chat_id: "@Bee_Family",
  text:
    "Hello " +
    user.first_name +
    "\n🤴User: @" +
    user.username +
    "\n👨‍💻Id : " +
    user.telegramid +
    "\n\nYour otp For @" +
    bot.name +
    "\nIs " +
    OTPn +
    ""
})

Bot.runCommand("ConOtp")

