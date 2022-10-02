/*CMD
  command: /statics
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /statics@grouphelpmrbeebot
CMD*/


if (chat.chat_type == "private") {
  Bot.sendMessage("*Updating *. . .",
{
on_result: "statedited", is_reply: true}
);
}else{
Bot.sendMessage("This option only works on private chat")
}

