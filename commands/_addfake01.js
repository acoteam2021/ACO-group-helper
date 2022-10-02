/*CMD
  command: /addfake01
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

let id=User.getProperty("adminmsgsid")
let ad=Bot.getProperty("admin_chat")
if(chat.chatid==ad){
Bot.editMessage("*🚀 Now Send The Amount That You Want To Add Fake Statistics Of Total Users*"+"\n_If You Want To Remove Statistics Input Negative Before The Amount_",id)
Bot.runCommand("/faketotalusers")} else{
Bot.runCommand("/start")}
