/*CMD
  command: /photolinksuc
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

if (chat.chat_type == "private") {
  
var limk =
  "https://api.telegram.org/file/bot" +
  bot.token +
  "/" +
  options.result.file_path +
  ""
HTTP.post({url:"https://api.secretprojects.xyz/v1/telegraph/upload/?url="+limk+"", success:"/ontgsup"})
}
