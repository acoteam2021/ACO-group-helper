/*CMD
  command: /onError
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

if(content == "Invalid Order id!"){
  balance.add("0")
Api.sendPhoto({
      photo: "https://images.app.goo.gl/zVWQJHw3HJQiBVibA",
      caption:
        "🎊 Transaction Failed\n💸 Amout : " +
        amount +
        "\n🍭 Order Id : " +
        id +
        "\nUpdated Balance: " +
        balance.value().toFixed(2) +
        ""
    })
return}
Bot.sendMessage("Ok")
