/*CMD
  command: /start_wel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Betting

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message_id })
var bot = request.chat.username
var disable = Bot.getProperty("disable_" + request.chat.id)

if (!disable) {
  let verified = User.getProperty("verified")
  if (verified == undefined || verified == "No") {
    let num = Libs.Random.randomInt(1, 10)
    User.setProperty("iv", num, "string")
    let main = 48
    //Don't Edit Value Of Main
    var link = main + num
    var url = "https://t.me/DonationWallet/" + link + ""
    Api.sendPhoto({
      photo: url,
      caption: "ð Choose the correct figure matching the image",
      is_reply: true,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "ð¦", callback_data: "/verify 1" },
            { text: "ð¯", callback_data: "/verify 2" },
            { text: "âï¸", callback_data: "/verify 3" },
            { text: "ð", callback_data: "/verify 4" },
            { text: "ð¾", callback_data: "/verify 5" }
          ],
          [
            { text: "âµï¸", callback_data: "/verify 6" },
            { text: "ð§", callback_data: "/verify 7" },
            { text: "ð¦", callback_data: "/verify 8" },
            { text: "ð", callback_data: "/verify 9" },
            { text: "ð", callback_data: "/verify 10" }
          ]
        ]
      },
      disable_web_page_preview: true
    })
    return
  } 
  else {
    Bot.sendMessage("ð¤You have been verified @" + user.username  + " ð«")
  }
}

