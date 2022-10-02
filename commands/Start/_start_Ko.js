/*CMD
  command: /start_Ko
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Start

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({ text: '⌨️ Keyboard Removed',
reply_markup: JSON.stringify({
hide_keyboard: true
})
})
Api.deleteMessage({ message_id: request.message.message_id })
Api.deleteMessage({ message_id: request.message.message_id })


var joinbuttons = [
  [
    { text: "Updates Channel", url: "https://t.me/Bee_Family" },
    { text: "Support Group", url: "https://t.me/Bee_Family" }
  ]
]
Api.sendPhoto({
  photo: "https://telegra.ph/file/95baa0ced3f09593e2866.jpg",
  caption:
    "Hello there  " +
    user.first_name +
    "[✧](https://telegra.ph/file/95baa0ced3f09593e2866.jpg)\n*Hi 🇰🇷 Group Helper 는 팀을 쉽고 안전하게 관리하는 데 도움이 되는 봇입니다.  \n\n ❓ 명령이란 무엇입니까?  ❓\n  /help 를 클릭하여 모든 명령과 작동 방식을 알아보세요!* ",

  reply_markup: {
    inline_keyboard: joinbuttons
  },
  parse_mode: "Markdown",
  disable_web_page_preview: true
})
var buttons = [
  [{ title: "☀명령☞", command: "/help" }],
  [{ title: "☈회사 소개☞", command: "/about_Ko" }]
]
Bot.sendInlineKeyboard(buttons, "★᭄ꦿ᭄ꦿ    𝐺𝑟𝑜𝑢𝑝 𝐻𝑒𝑙𝑝𝑒𝑟  ★᭄ꦿ᭄ꦿ ")

