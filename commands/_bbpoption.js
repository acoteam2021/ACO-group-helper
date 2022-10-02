/*CMD
  command: /bbpoption
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /bbpoption@grouphelpmrbeebot
CMD*/


Bot.runCommand("/start-info")

if(params&&params.includes("req")&&params.includes("-points-to-")){
  Bot.runCommand("/onRequest " + params);
}

if(params&&(params=="link")){
  Bot.runCommand("/link")
}
