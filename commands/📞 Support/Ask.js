/*CMD
  command: Ask
  help: 
  need_reply: true
  auto_retry_time: 
  folder: š Support
  answer: _š¬ How Can I Help You ?_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
User.setProperty("Ask", message, "string")
Bot.sendMessage("*š© Message Sent To Admin As = " + message + "*")
Bot.sendMessageToChatWithId(
  5514111111,
  "*š© New Support Message From User š©\n\nš¤“š» User =* [" +
    user.first_name +
    "](tg://user?id=" +
    user.telegramid +
    ")\n\n*š Message = " +
    message +
    "*"
)


