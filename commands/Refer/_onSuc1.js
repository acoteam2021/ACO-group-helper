/*CMD
  command: /onSuc1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Refer

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (content == "Invalid Order id!") {
  Bot.sendMessage("No Transaction Found!")
  return
}
var res = JSON.parse(content)
var re = User.getProperty("re")
var id = User.getProperty("id")
var balance = Libs.ResourcesLib.userRes("balance")
var amount = User.getProperty("amount")
var suc = res.status
if (suc == "success") {
  if (re == "suc") {
    Bot.sendMessage("*Amount - " +amount+ " Rupees Only\n \n📛 Your Payment Has Been Successfully Sended To User 🎭*")
  } else {
    Api.sendPhoto({
      photo: "https://t.me/Payment_Sucessfull/2",
      caption:
        "🎭 Transaction Success\n💸 Amout : " +
        amount +
        "\n🍭Order Id : " +
        id +
        ""
    })
    User.setProperty("re", "suc", "string")
    return
  }
}
Bot.sendMessage("");
