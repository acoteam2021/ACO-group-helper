/*CMD
  command: onTransfer
  help: 
  need_reply: false
  auto_retry_time: 
  folder: BB option

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var json = JSON.parse(content)
// You can inspect all passed data:

if (json.error) {
  Bot.sendMessage("Error: " + json.error.title)
  Bot.sendMessage("Code: " + json.error.code)
  return
}

var bbpoints = Libs.ResourcesLib.userRes("bbpoints")
bbpoints.remove(json.amount)

// BB Points transferred to current user
var admin_bb_points = json.owner.bb_points - json.amount

Bot.sendMessage(
  "BB Points transferred:\n" +
    json.amount +
    "💎 BB Points to tg id: " +
    user.telegramid +
    "\n\nAdmin: @" +
    json.owner.username +
    " have now: " +
    String(admin_bb_points) +
    "💎 BB Points"
)

