/*CMD
  command: AddCaptcha
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *SEND THE PHOTO WITH CAPTION* 

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.sendMessage("*Captcha Added Succesfully.*")
var t = 
Libs.ResourcesLib.anotherChatRes("timm","global")
t.add(1)
Bot.setProperty("Pic"+t.value(),request.photo[0].file_id,"string")
Bot.setProperty("Cap"+t.value(),request.caption,"string")
