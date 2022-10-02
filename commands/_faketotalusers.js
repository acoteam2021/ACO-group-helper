/*CMD
  command: /faketotalusers
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

let depo = Libs.ResourcesLib.anotherChatRes("totalusers", "global")
let amount=message
let b =Bot.getProperty("admin_chat")
let ap=User.getProperty("adminmsgsid")
if(data.chat.chatid==b)
{
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id});
depo.add(+amount)
let ted="*✅ Fake Total Users Added +"+message+"*"
var bt =[
[{text:"Return ↩️",callback_data:"/fakeaddstsatifakestatictsadmin91"}, {text:"⬅️ Back To Settings",callback_data:"/adminlogin r"}]]
Api.editMessageText({chat_id:chat.chatid,text:ted,message_id:ap,parse_mode:"markdown",reply_markup:{inline_keyboard:bt}})
}else{
Bot.runCommand("/start")}



















