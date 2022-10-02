/*CMD
  command: /talk
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Talking option 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /talk@grouphelpmrbeebot
CMD*/


if (message && message.includes("Live")) {
  Bot.sendMessage( " 📖️Guideline☞\nIt is mandatory to add /talk or /t  to the beginning of the sentence or word while conversing with the bot\n📖️📖️📖️📖️\n🔊Bot's message ✍~\n\n『 I Live in https://t.me/acobot_Team From Sri Lanka 🇱🇰 』", {
    is_reply: true
  })
  return
}

if (message && message.includes("live")) {
  Bot.sendMessage( " 📖️Guideline☞\nIt is mandatory to add /talk or /t  to the beginning of the sentence or word while conversing with the bot\n📖️📖️📖️📖️\n🔊Bot's message ✍~\n\n『 I Live in https://t.me/acobot_Team From Sri Lanka 🇱🇰 』", {
    is_reply: true
  })
  return
}








if (message && message.includes("state")) {
  Bot.sendMessage( " 📖️Guideline☞\nIt is mandatory to add /talk or /t  to the beginning of the sentence or word while conversing with the bot\n📖️📖️📖️📖️\n🔊Bot's message ✍~\n\n『 Kandy 🇱🇰 』", {
    is_reply: true
  })
  return
}
if (message && message.includes("State")) {
  Bot.sendMessage( " 📖️Guideline☞\nIt is mandatory to add /talk or /t  to the beginning of the sentence or word while conversing with the bot\n📖️📖️📖️📖️\n🔊Bot's message ✍~\n\n『 Kandy 🇱🇰 』", {
    is_reply: true
  })
  return
}

if (message && message.includes("City")) {
  Bot.sendMessage( " 📖️Guideline☞\nIt is mandatory to add /talk  or /t to the beginning of the sentence or word while conversing with the bot\n📖️📖️📖️📖️\n🔊Bot's message ✍~\n\n『 I'm from Kandy City 🇱🇰 』", {
    is_reply: true
  })
  return
}
if (message && message.includes("city")) {
  Bot.sendMessage( " 📖️Guideline☞\nIt is mandatory to add /talk or /t  to the beginning of the sentence or word while conversing with the bot\n📖️📖️📖️📖️\n🔊Bot's message ✍~\n\n『I'm From  Kandy City 🇱🇰 』", {
    is_reply: true
  })
  return
}



if (message && message.includes("country")) {
  Bot.sendMessage( " 📖️Guideline☞\nIt is mandatory to add /talk or /t  to the beginning of the sentence or word while conversing with the bot\n📖️📖️📖️📖️\n🔊Bot's message ✍~\n\n『 My Country is Sri Lanka 🇱🇰 』", {
    is_reply: true
  })
  return
}


if (message && message.includes("Country")) {
  Bot.sendMessage( " 📖️Guideline☞\nIt is mandatory to add /talk or /t  to the beginning of the sentence or word while conversing with the bot\n📖️📖️📖️📖️\n🔊Bot's message ✍~\n\n『 My Country is Sri Lanka 🇱🇰 』", {
    is_reply: true
  })
  return
}else{



var d = "" + encodeURI(params + "")
HTTP.get({
  url:
    "http://api.brainshop.ai/get?bid=168961&key=9GEjxayoYuNe3NEB&uid=shab3Gsh7&msg=" +
    d +
    "",
  success: "/ontalk"
})
}
