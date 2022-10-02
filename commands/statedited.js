/*CMD
  command: statedited
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

var date = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy")
var timee = Libs.DateTimeFormat.format(new Date(), "h:M:s T") + "M"
var stat = Libs.ResourcesLib.anotherChatRes("totalusers", "global")
var depostat = Libs.ResourcesLib.anotherChatRes("active", "global")
var bots = Libs.ResourcesLib.anotherChatRes("bots", "global")
var codes = Libs.ResourcesLib.anotherChatRes("codes", "global")

let msg_id = options.result.message_id
var k = Bot.getProperty("management")
if (k == "on") {
  Api.sendPhoto({
    photo: "https://imbt.ga/0qL1iJuryt",
    caption:
      "<b> We are currently Saving power, Please use this command after some Hours</b>",
    parse_mode: "HTML"
  })

  return
} else var to = Bot.getProperty("maintenance")
if (to == "on") {
  Bot.sendMessage(
    "*😌 Sorry*, The Bot is currently 🛠 *Under Maintenance*\n_🤘 Please wait it may take up to 1-12 Hour._"
  )
  return
} else var ban = Bot.getProperty(user.telegramid + "/ban")
if (ban == true) {
  var button = [
    { title: "🗣️Contact Support", url: "https://t.me/Bee_Family" }
  ]
  Bot.sendInlineKeyboard(button, "*You are banned from using this bot*")
  return
} else Bot.editMessage("_█▒▒▒▒▒▒▒▒▒▒▒▒▒ 0%_", msg_id)
Bot.editMessage("_███▒▒▒▒▒▒▒▒▒▒▒ 10%_", msg_id)
Bot.editMessage("_████▒▒▒▒▒▒▒▒▒▒ 25%_", msg_id)
Bot.editMessage("_█████▒▒▒▒▒▒▒▒▒ 40%_", msg_id)
Bot.editMessage("_███████▒▒▒▒▒▒▒ 56%_", msg_id)
Bot.editMessage("_█████████▒▒▒▒▒ 67%_", msg_id)
Bot.editMessage("_███████████▒▒▒ 88%_", msg_id)
Bot.editMessage("_██████████████ 100%_", msg_id)
Bot.editMessage("*Updated*", msg_id)
Bot.editMessage(
  "*📊 Bot Live Statistics*\n\n*⚡ Live  Users:* `" +
    status +
    
    
    "`\n\n *🔝 Data for*: (_Today_)" +
    "\n* 📅 Date: *_" +
    date +
    "_\n* 🕐 Time: *_" +
    timee +
    "_",
  msg_id


  
)
Bot.runCommand("photo_stat")


  
