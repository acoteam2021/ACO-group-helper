/*CMD
  command: /ve**r**i**fy
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/


if ( user.telegramid == 5514111111){
Bot.setProperty("Verify"+params, params, "string")
Bot.sendMessage(params+" Has Been Verified")
Bot.sendMessageToChatWithId(params, "*Admin Has Verified You*Now you can use owners' panel")

// Automatic fix
var is_alert

// Automatic fix
var is_alert

is_alert = params != "top"

// help - https://core.telegram.org/bots/api#answercallbackquery
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "𖣘︎𝑨𝒅𝒎𝒊𝒏 𝒑𝒂ñ𝒆𝒍𖣘︎",
  show_alert: is_alert
})

var admin = Bot.getProperty("admin" + user.Nikil)
if (user.Nikil == admin) {
  var button = [
  
      { title: "⚠️ Ban", command: "/ban_1" },
      { title: "✅ Unban", command: "/unban_1" }
    ],
    [
      { title: "🔇Mute", command: "/mute_1" },
      { title: "🔈 UnMute", command: "/unmute_1" }
    ],
    [
      { title: "📌️Pin", command: "/pin" },
 
    ],

    [{ title: "🔓Logout🔑", command: "logout" }]
  ]

  Bot.sendInlineKeyboard(keyboard, " ༺༒༻ ")

  Bot.sendInlineKeyboard(
    button,
    "Hi  [" +
      user.first_name +
      "](tg://user?id=" +
      user.telegramid +
      ")\n\n🌐Admin Panel "
  )



}else{
Bot.sendMessage("You can't use owners' zone.")
}
