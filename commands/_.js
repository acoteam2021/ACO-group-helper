/*CMD
  command: *
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

if (request.new_chat_members[0]) {
  Bot.sendMessage(
    " *👋 Hi *" + request.new_chat_members[0].first_name + " ᰔᩚ, ",
    { disable_web_page_preview: true }
  )
  

  Bot.runCommand("Captcha")
  return
}
Bot.runCommand("/talk8")

if (request.photo[14]) {
  Api.getFile({
    file_id: request.photo[14].file_id,
    on_result: "/photolinksuc"
  })
  return
}

if (request.photo[13]) {
  Api.getFile({
    file_id: request.photo[13].file_id,
    on_result: "/photolinksuc"
  })
  return
}
if (request.photo[12]) {
  Api.getFile({
    file_id: request.photo[12].file_id,
    on_result: "/photolinksuc"
  })
  return
}
if (request.photo[11]) {
  Api.getFile({
    file_id: request.photo[11].file_id,
    on_result: "/photolinksuc"
  })
  return
}

if (request.photo[10]) {
  Api.getFile({
    file_id: request.photo[10].file_id,
    on_result: "/photolinksuc"
  })
  return
}
if (request.photo[9]) {
  Api.getFile({ file_id: request.photo[9].file_id, on_result: "/photolinksuc" })
  return
}

if (request.photo[8]) {
  Api.getFile({ file_id: request.photo[8].file_id, on_result: "/photolinksuc" })
  return
}

if (request.photo[7]) {
  Api.getFile({ file_id: request.photo[7].file_id, on_result: "/photolinksuc" })
  return
}
if (request.photo[6]) {
  Api.getFile({ file_id: request.photo[6].file_id, on_result: "/photolinksuc" })
  return
}
if (request.photo[5]) {
  Api.getFile({ file_id: request.photo[5].file_id, on_result: "/photolinksuc" })
  return
}

if (request.photo[4]) {
  Api.getFile({ file_id: request.photo[4].file_id, on_result: "/photolinksuc" })
  return
}
if (request.photo[3]) {
  Api.getFile({ file_id: request.photo[3].file_id, on_result: "/photolinksuc" })
  return
}
if (request.photo[2]) {
  Api.getFile({ file_id: request.photo[2].file_id, on_result: "/photolinksuc" })
  return
}
if (request.photo[1]) {
  Api.getFile({ file_id: request.photo[1].file_id, on_result: "/photolinksuc" })
  return
}
if (request.photo[0]) {
  Api.getFile({ file_id: request.photo[0].file_id, on_result: "/photolinksuc" })
  return
}

if (request.sender_chat && request.sender_chat.type == "channel") {
  return
}
if (request.from.is_bot == "true") {
  return
}
//rain Online
if (coolDown()) {
  var gff = Libs.ResourcesLib.anotherChatRes("gff", "global")
  User.setProperty("cooldown_" + request.chat.id, Date.now(), "integer")
  var message = Libs.ResourcesLib.userRes(
    gff.value() + "_message_" + request.chat.id
  )
  message.add(+1)
}
var add = Bot.getProperty("online_" + request.chat.id, { list: {} })
if (!add.list[user.telegramid]) {
  add.list[user.telegramid] = {
    user: { telegramid: user.telegramid }
  }
  Bot.setProperty("online_" + request.chat.id, add, "json")
}
//reset 3 hours
if (canRun1()) {
  var gff = Libs.ResourcesLib.anotherChatRes("gff", "global")
  gff.add(+1)
  Bot.setProperty("online_3_hours_" + request.chat.id, Date.now(), "integer")
}
//delete
var deleted = Bot.getProperty("delete_" + request.chat.id)
if (deleted) {
  if (request.new_chat_members.length > 0) {
    Api.deleteMessage({ message_id: request.message_id })
    return
  } else {
    if (request.left_chat_member) {
      Api.deleteMessage({ message_id: request.message_id })
      return
    }
  }
}
//administration
var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
if (admin.list[user.telegramid] == user.telegramid) {
  return
}
var banned_words = Bot.getProperty("banned_" + request.chat.id)
if (banned_words) {
  //banwords
  for (var index in banned_words) {
    //index
    if (request.text) {
      if (request.text.includes(banned_words[index])) {
        Api.deleteMessage({ message_id: request.message_id })
        return
      }
    }
  }
  if (request.entities.length > 0) {
    var url = request.entities[0].url
    if (url) {
      if (url.includes(banned_words[index])) {
        Api.deleteMessage({ message_id: request.message_id })
        return
      }
    }
    //index
  }
  //banwords
}

