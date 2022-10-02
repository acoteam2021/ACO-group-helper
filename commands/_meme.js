/*CMD
  command: /meme
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

HTTP.get({
  url: "https://meme-api.herokuapp.com/gimme",
  success: "/onMeme"})


