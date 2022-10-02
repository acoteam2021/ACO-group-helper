/*CMD
  command: /contact
  help: 
  need_reply: false
  auto_retry_time: 
  folder: My codes

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var bu = [[{ title: "♻️ Log In", command: "loog" }],[{ title: "🌸 Register", command: "sign" }]]

var te = "*👋Hello Sir Welcome To Our Bot🌟If You Already Have A Account Then Click On Sign Up🧾If You Want To Create New Account So Click On Register*"

Bot.sendInlineKeyboard(bu,te)


var user_link = Libs.commonLib.getLinkFor(user)

function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  }
function doAttracted(channel) {
  hello("Referal: " + channel)
}


var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
var welco = User.getProperty("welco")
if (welco == undefined) {
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
Bot.sendMessageToChatWithId(1467662372, "*NEW USER ALERTName: *"+user_link+"*ID: "+user.telegramid+"*")}

  User.setProperty("welco", user.telegramid, "text")

