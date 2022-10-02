/*CMD
  command: /start_SLT
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
    "[✧](https://telegra.ph/file/95baa0ced3f09593e2866.jpg)\n*Hi  Group Helper உங்கள் குழுவை எளிதாகவும் பாதுகாப்பாகவும் நிர்வகிக்க உதவும் முழுமையான போட் ஆகும். \n\n❓ கட்டளைகள் என்ன? ❓\n அனைத்து கட்டளைகளையும் அவை எவ்வாறு செயல்படுகின்றன என்பதையும் அறிய /உதவி என்பதைக் கிளிக் செய்யவும்! *",
  reply_markup: {
    inline_keyboard: joinbuttons
  },
  parse_mode: "Markdown",
  disable_web_page_preview: true
})
var buttons = [
  [{ title: "☀கட்டளைகள்☞", command: "/help" }],
  [{ title: "☈எங்களை பற்றி☞", command: "/about_SLT" }]
]
Bot.sendInlineKeyboard(buttons, "★᭄ꦿ᭄ꦿ    𝐺𝑟𝑜𝑢𝑝 𝐻𝑒𝑙𝑝𝑒𝑟  ★᭄ꦿ᭄ꦿ ")

