/*CMD
  command: /t
  help: 
  need_reply: false
  auto_retry_time: 
  folder: voice talking

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /t@grouphelpmrbeebot
CMD*/





if (message && message.includes("Live")) {
  Bot.sendMessage( " ๐๏ธGuidelineโ\nIt is mandatory to add /talk  or /t to the beginning of the sentence or word while conversing with the bot\n๐๏ธ๐๏ธ๐๏ธ๐๏ธ\n๐Bot's message โ~\n\nใ I Live in https://t.me/acobot_Team From Sri Lanka ๐ฑ๐ฐ ใ", {
    is_reply: true
  })
  return
}

if (message && message.includes("live")) {
  Bot.sendMessage( " ๐๏ธGuidelineโ\nIt is mandatory to add /talk or /t  to the beginning of the sentence or word while conversing with the bot\n๐๏ธ๐๏ธ๐๏ธ๐๏ธ\n๐Bot's message โ~\n\nใ I Live in https://t.me/acobot_Team From Sri Lanka ๐ฑ๐ฐ ใ", {
    is_reply: true
  })
  return
}








if (message && message.includes("state")) {
  Bot.sendMessage( " ๐๏ธGuidelineโ\nIt is mandatory to add /talk or /t  to the beginning of the sentence or word while conversing with the bot\n๐๏ธ๐๏ธ๐๏ธ๐๏ธ\n๐Bot's message โ~\n\nใ Kandy ๐ฑ๐ฐ ใ", {
    is_reply: true
  })
  return
}
if (message && message.includes("State")) {
  Bot.sendMessage( " ๐๏ธGuidelineโ\nIt is mandatory to add /talk  or /t  to the beginning of the sentence or word while conversing with the bot\n๐๏ธ๐๏ธ๐๏ธ๐๏ธ\n๐Bot's message โ~\n\nใ Kandy ๐ฑ๐ฐ ใ", {
    is_reply: true
  })
  return
}

if (message && message.includes("City")) {
  Bot.sendMessage( " ๐๏ธGuidelineโ\nIt is mandatory to add /talk or /t  to the beginning of the sentence or word while conversing with the bot\n๐๏ธ๐๏ธ๐๏ธ๐๏ธ\n๐Bot's message โ~\n\nใ I'm from Kandy City ๐ฑ๐ฐ ใ", {
    is_reply: true
  })
  return
}
if (message && message.includes("city")) {
  Bot.sendMessage( " ๐๏ธGuidelineโ\nIt is mandatory to add /talk  or /t to the beginning of the sentence or word while conversing with the bot\n๐๏ธ๐๏ธ๐๏ธ๐๏ธ\n๐Bot's message โ~\n\nใI'm From  Kandy City ๐ฑ๐ฐ ใ", {
    is_reply: true
  })
  return
}



if (message && message.includes("country")) {
  Bot.sendMessage( " ๐๏ธGuidelineโ\nIt is mandatory to add /talk or /t   to the beginning of the sentence or word while conversing with the bot\n๐๏ธ๐๏ธ๐๏ธ๐๏ธ\n๐Bot's message โ~\n\nใ My Country is Sri Lanka ๐ฑ๐ฐ ใ", {
    is_reply: true
  })
  return
}


if (message && message.includes("Country")) {
  Bot.sendMessage( " ๐๏ธGuidelineโ\nIt is mandatory to add /talk or /t  to the beginning of the sentence or word while conversing with the bot\n๐๏ธ๐๏ธ๐๏ธ๐๏ธ\n๐Bot's message โ~\n\nใ My Country is Sri Lanka ๐ฑ๐ฐ ใ", {
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
