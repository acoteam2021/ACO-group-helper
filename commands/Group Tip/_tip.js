/*CMD
  command: /tip
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Group Tip
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.reply_to_message) {
  if (!params) {
    Bot.sendMessage("⚠️ Incorrect Format use\n`/tip 1 dgb`")
    return
  }
}
if (!params) {
  Bot.sendMessage("⚠️ Incorrect Format use\n`/tip 1 dgb`")
  return
}
