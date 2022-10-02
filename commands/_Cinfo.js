/*CMD
  command: /Cinfo
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /cinfo@grouphelpmrbeebot
CMD*/

if (!params) {
  Bot.sendMessage(
    "*Params error*\n\n,_ send like /Cinfo Country name _\n\n*_ Don't use space _*\n NOTE !! \n\n ADD + INSTEAD OF GAP \n\nLIKE :- \n\n     Sri+Lanka"
  )
} else {
  Bot.sendMessage("*Gathering Infomation Please Wait!!*")
  HTTP.get({
    url: "https://api.secretprojects.xyz/v1/country/?name=" + params + "",
    folow_redirects: true,
    success: "/onCountryinfo"
  })
}

