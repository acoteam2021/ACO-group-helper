/*CMD
  command: /ban_3
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

Api.banChatMember({
        chat_id: request.chat.id,
        user_id: tg.user_id,
        on_result: "/baned " + tg.user_id + " und2 und3 und4"
      })
      return
    }
