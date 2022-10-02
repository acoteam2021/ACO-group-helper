/*CMD
  command: tracking
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

   if(chat.chat_type=="private"){
      // track only private chats

      total_users = Bot.getProperty("total_users");
      if(!total_users){ total_users = 0 }
      Bot.setProperty("total_users", total_users+1, "integer");

      var propLastActiveName = "user" + String(total_users) + "_last_active_at";
      var propChatIdName =  "chat" + String(i) + "_id";

      Bot.setProperty(propLastActiveName, (new Date), "datetime");
      Bot.setProperty(propChatIdName, chat.chatid, "string");  
   }
