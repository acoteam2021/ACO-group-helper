/*CMD
  command: /start_IN
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

Api.sendMessage({
  text: "⌨️ Keyboard Removed",
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
    "[✧](https://telegra.ph/file/95baa0ced3f09593e2866.jpg)\n*Hi  Group Help  एक अधिक संपूर्ण बॉट जो आपके समूह को आसानी से और सुरक्षित रूप से प्रबंधित करने में सहायता करता है।\n 👉🏻 मुझे एक सुपरग्रुप में जोड़ें और बेहतर प्रदर्शन के लिए मुझे एक व्यवस्थापक के रूप में प्रचारित करें!  \n\n❓ आदेश क्या हैं?  ❓\n सभी कमांड और वे कैसे काम करते हैं, यह जानने के लिए /help पर क्लिक करें!*",
  reply_markup: {
    inline_keyboard: joinbuttons
  },
  parse_mode: "Markdown",
  disable_web_page_preview: true
})
var buttons = [
  [{ title: "☀आदेशों☞", command: "/help" }],
  [{ title: "☈हमारे बारे में☞", command: "/about_IN" }]
]
Bot.sendInlineKeyboard(buttons, "★᭄ꦿ᭄ꦿ    𝐺𝑟𝑜𝑢𝑝 𝐻𝑒𝑙𝑝𝑒𝑟  ★᭄ꦿ᭄ꦿ ")

