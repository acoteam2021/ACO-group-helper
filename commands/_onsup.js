/*CMD
  command: /onsup
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

var r = JSON.parse(content)
var s = r.data.url
let msg_id = options.result.message_id
Bot.editMessage(
  "`Downloading Completed. Now I'am Uploading to Photo...`",
  msg_id
)
Bot.editMessage(
  "`Downloading Completed. Now I'am Uploading to Photo...`",
  msg_id
)
Bot.editMessage(
  "`Downloading Completed. Now I'am Uploading to Photo...`",
  msg_id
)
Bot.editMessage(
  "📖️Hello »»" + user.first_name + "\n This is your Photo with link 》》\n" + s,
  msg_id,
  { disable_web_page_preview: true }
)

