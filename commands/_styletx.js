/*CMD
  command: /styletx
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter your message to make stylish text

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

HTTP.get({
  url: "https://api.secretprojects.xyz/v1/StylishText/?text=" + message + "",
  success: "/suc1"
})

