/*CMD
  command: /predict
  help: 
  need_reply: true
  auto_retry_time: 
  folder: My codes
  answer: Send your name....

  <<KEYBOARD

  KEYBOARD
  aliases: /predict@grouphelpmrbeebot
CMD*/

HTTP.get({
  url: "https://api.genderize.io/?name="+message+"",
  success: "sys/gender"
})
