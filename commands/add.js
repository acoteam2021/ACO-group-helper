/*CMD
  command: add
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
  
  Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

var mybots = User.getProperty("bots")
if (mybots > "25"){
  Bot.sendMessage("♻️ Maximum Bots Reached")
  return
}
BBAdmin.cloneBot(
  { 
    // see bot id in the app -> Bots -> Bot
    bot_id:726449 ,
    
    // you can pass bot token if you want
    token: message,
    
    // run the bot immediately after cloning
    run_now: true,
    
    // bot can be installed as protected
    // as_protected: true,
    //you can pass properties to bot:
    bot_properties: [
       { name: 'admin_chat',
           value: user.telegramid,
          type:'string' }
    ]
  }
)
HTTP.get({url: "https://api.telegram.org/bot"+message+"/getMe",success:"botsu"})
