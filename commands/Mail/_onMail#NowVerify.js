/*CMD
  command: /onMail#NowVerify
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Mail

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var verified = User.getProperty("verified")
if(verified==undefined||verified=="No"){

if(!content){ return }
var js = JSON.parse(content)
var stat = js.Status
var data = js.Message
if(stat=="Success"){
Bot.sendMessage("✅ OTP Sended To Your Mail\n\nCheck It And Enter OTP Here",{is_reply:true})
Bot.runCommand("/onMail#Verify")
return }
Bot.sendMessage(data,{is_reply:true})

return }
Bot.sendMessage("✅ You Are Already Verified",{is_reply:true})
