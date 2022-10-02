/*CMD
  command: /start_SL
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
    "[✧](https://telegra.ph/file/95baa0ced3f09593e2866.jpg)\n*Hi  Group Help යනු ඔබගේ සමූහය පහසුවෙන් සහ ආරක්ෂිතව කළමනාකරණය කිරීම සදහා සහය දෙන වඩාත් අංග සම්පූර්ණ බොට්වරයෙකි .\n 👉🏻 මට වඩාත් හොදින් ක්‍රියා කිරීම සදහා මාව සුපිරි සමූහයකට එකතු කර ඇඩ්මින්වරයෙකු ලෙස උසස් කරන්න! \n\n❓ විධාන මොනවාද? ❓\n /help යන්න මත ක්ලික් කර සියලුම විධාන සහ ඒවා ක්‍රියා කරන ආකාරය දැනගන්න!*",
  reply_markup: {
    inline_keyboard: joinbuttons
  },
  parse_mode: "Markdown",
  disable_web_page_preview: true
})
var buttons = [
  [{ title: "☀විධාන☞", command: "/help" }],
  [{ title: "☈අප ගැන☞", command: "/about_SL" }]
]
Bot.sendInlineKeyboard(buttons, "★᭄ꦿ᭄ꦿ    𝐺𝑟𝑜𝑢𝑝 𝐻𝑒𝑙𝑝𝑒𝑟  ★᭄ꦿ᭄ꦿ ")

