/*CMD
  command: /botavatar
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

if(!params){
  Bot.sendMessage("*Params error*\n\n_Send like /botavatar [type]_");
}
else{
var m ="https://robohash.org/"+params+"?gravatar=hashed"
Api.sendPhoto({
photo: m, 
caption: "*Finded*",
parse_mode: "Markdown"
})
  }
