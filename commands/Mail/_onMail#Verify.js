/*CMD
  command: /onMail#Verify
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Mail

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let msg = message 
var verified = User.getProperty("verified")
if(verified==undefined||verified=="No"){
var ans = User.getProperty("captcha")
if(msg==ans){
Bot.sendMessage("✅ You Are Verified",{is_reply:true})
//Bot.runCommand("")
User.setProperty("verified","Yes","text")
}else{
Bot.sendMessage("❌ Wrong, Try Again",{is_reply:true})
User.setProperty("verified","No","text")
Api.restrictChatMember({
          chat_id: request.chat.id,
          user_id: user.telegramid
        })
}
return }
Bot.sendMessage("✅ You Are Already Verified",{is_reply:true})
