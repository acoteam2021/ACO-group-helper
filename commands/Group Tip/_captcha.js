/*CMD
  command: /captcha
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

Bot.sendMessage("*Generating Captcha...*")
var captchaText = generateCaptchaText(4)
var arrayOfNum = [
  generateCaptchaText(4),
  generateCaptchaText(4),
  generateCaptchaText(4),
  generateCaptchaText(4),
  generateCaptchaText(4),
  generateCaptchaText(4),
  generateCaptchaText(4),
  generateCaptchaText(4),
  captchaText
]
var arrayOfNum = shuffleCaptchaText(arrayOfNum)
var inlKeyboard = [[], [], []]
for (var index in arrayOfNum) {
  inlKeyboard[defineRow(index)].push({
    text: arrayOfNum[index],
    callback_data: "checkAnswer " + captchaText + " " + arrayOfNum[index]
  })
}
Api.sendPhoto({
  photo: "https://api.rgbots.xyz/v1/captcha/imageCaptcha?text=" + captchaText,
  caption: "*🪦Image Captcha* *Please Choose Correct Answer From Below",
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: inlKeyboard }
})

