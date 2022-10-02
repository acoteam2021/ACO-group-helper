/*CMD
  command: /braing
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: play

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({
  text: "Your web app",
  reply_markup: {
    inline_keyboard: [
      [
        // open the any web page on button pressing
        {
          text: "◼️Open App▪️",
          web_app: { url: " https://poki.com/en/g/brain-test-tricky-puzzles " }
        }
      ]
    ]
  }
})

