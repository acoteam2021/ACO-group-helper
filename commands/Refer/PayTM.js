/*CMD
  command: PayTM
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Refer
  answer: *🗣️ Send Amount You Want Pay*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var rand = Libs.Random.randomInt(100, 100000)

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild Value. Enter Only Numeric Value. Try Again*", {
    is_reply: true
  })
  return
}
if (message <0.99) {
  Bot.sendMessage("*❌ Min. Deposit Amount Is ₹1\n❌ Max. Deposit Amount Is ₹99*")
  return
}
if (message >99) {
  Bot.sendMessage("*❌ Min. Deposit Amount Is ₹1\n❌ Max. Deposit Amount Is ₹99*")
  return
}
var rand = Libs.Random.randomInt(1000000000, 9000090000)
User.setProperty("id",rand,"integer")
var idd = User.getProperty("id")
User.setProperty("re", null)
User.setProperty("amount", message, "integer")
var txt =
  "*🚀 User : " +
  user.first_name +
  "\n💸 Amout : " +
  message +
  " Rupees Only*\n*🚧  Order ID * : " +
  idd +
  ""
var button = [
  [
    {
      title: "🏳️ Pay ",
      url:
        "https://full2sms.in/gateway/processPpayment?token=Your Token&amount="+message+"&order_id=" +idd+ "&cpin=Your CPIN"
    }
  ],
  [{ title: "Paid ✅", command: "/onSuc" }]
]
Bot.sendInlineKeyboard(button, txt, { is_reply: true })
