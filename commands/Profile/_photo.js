/*CMD
  command: /photo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Profile
  answer: **SEND ME YOUR FRIEND'S USERNAME WITHOUT @**


  <<KEYBOARD

  KEYBOARD
  aliases: /photo@grouphelpmrbeebot
CMD*/

var txt = message
Api.sendPhoto({photo: "t.me/"+txt+""})
