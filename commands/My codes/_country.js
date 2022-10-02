/*CMD
  command: /country
  help: 
  need_reply: true
  auto_retry_time: 
  folder: My codes
  answer: Send your Country Name....

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.sendMessage("Gathering Infomation Please Wait!!")

HTTP.get({
  url:"https://api.secretprojects.xyz/v1/random/user",
  success:"/onUser"
}) 

