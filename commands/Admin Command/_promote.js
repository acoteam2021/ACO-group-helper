/*CMD
  command: /promote
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Command

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (!params) {
  Bot.sendMessage(
    "*Params error*\n\nsend like `/promote user telegramid` \n\n*_to get telegram id use /info  command _ and get....*"
  )
} else {
  Bot.sendMessage(
    "*User*    `" +
      params +
      "`      *\n Has been  promoted*👮️\n \n  🏔️`is_anonymous: false`,\n⛰️`can_promote_members: true`,\n🌋`can_delete_messages: false`,\n🗻`can_restrict_members: false`,\n🏛️`can_edit_messages: true`,\n🗽`can_post_messages: true`"
  )
  Api.promoteChatMember({
    chat_id: chat.telegramid,
    user_id: params,
    is_anonymous: "false",
    can_promote_members: "false",
    can_delete_messages: "false",
    can_restrict_members: "false",
    can_edit_messages: "true",
    can_post_messages: "true",
    parse_mode: "markdown"
  })
}

