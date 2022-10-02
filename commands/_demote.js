/*CMD
  command: /demote
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
    "*Params error*\n\nsend like `/demote user telegramid` \n\n*_to get telegram id use /info  command _ and get....*"
  )
} else {
  Bot.sendMessage(
    "*User*    `" +
      params +
      "`      *\n Has been  demoted*👮️\n \n  🏔️`is_anonymous: false`,\n⛰️`can_promote_members: false`,\n🌋`can_delete_messages: false`,\n🗻`can_restrict_members: false`,\n🏛️`can_edit_messages: false`,\n🗽`can_post_messages: true`"
  )
  Api.promoteChatMember({
    chat_id: chat.telegramid,
    user_id: params,
     chat_id: chat.telegramid,
  user_id: params,
  is_anonymous: "false",
  can_promote_members: "false",
  can_delete_messages: "false",
  can_restrict_members: "false",
  can_edit_messages: "false",
  can_post_messages: "true",
  parse_mode: "markdown"
    
    
  })
}

