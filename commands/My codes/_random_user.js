/*CMD
  command: /random_user
  help: 
  need_reply: false
  auto_retry_time: 
  folder: My codes

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.sendMessage("*Gathering Infomation Please Wait!!*")
HTTP.get({
  url: "https://api.secretprojects.xyz/v1/random/user",
  folow_redirects: true,
  success: "/onRandom_User"
})

