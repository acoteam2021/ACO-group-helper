/*CMD
  command: 🧿Register
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Register⚠️️

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var useralready = User.getProperty("UserStatusR")
if (useralready == "yes") {
  Bot.sendMessage("*Sorry*\n_You Already Registered !_")
  return
}
if (!useralready) {
  Bot.sendMessage("Starting Registration...")
  Bot.sendMessage(
    "*Send Your New Password*\n\n_- It should be 4 numbers long\n- Only numbers allower_"
  )
  Bot.run({ command: "/setPassword", options: { verification: true } })
  return
}

