/*CMD
  command: /lyrics
  help: 
  need_reply: true
  auto_retry_time: 
  folder: My codes
  answer: Enter your song name....

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

HTTP.get({
  url: "https://apis.xditya.me/lyrics?song="+encodeURI(message)+"",
  success: "/lyrics2"
})

