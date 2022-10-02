/*CMD
  command: /github
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

if (!params) {
  Bot.sendMessage(
    "*Params error*\n\n,_ send like /github name _\n\n*_ Don't use space _*\n NOTE !! \n\n ADD + INSTEAD OF GAP \n\nLIKE :- \n\n     "
  )
} else {
  Bot.sendMessage("Gathering Infomation Please Wait!!")

  HTTP.get({
    url: "https://api.github.com/users/" + params,
    success: "/onGit"
  })
}

