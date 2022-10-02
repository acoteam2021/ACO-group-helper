/*CMD
  command: Addblacklist
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Input Tgid to Blacklist*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if ((user.telegramid = key)) {
  var tgID = message // any tgID for ban. You can pass it via message with wait for reply
  var badUsers = Bot.getProperty("blacklisted", { list: {} })
  badUsers.list[tgID] = true
  // for unban:
  // badUsers.list[tgID] = false;
  Bot.setProperty("blacklisted", badUsers, "json")
  Bot.sendMessage("*User with TG id*: " + tgID + " *Blacklisted*")
} else {
  Bot.sendMsssage("You are Not Admin or Mod")
}

