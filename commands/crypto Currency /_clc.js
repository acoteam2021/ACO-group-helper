/*CMD
  command: /clc
  help: 
  need_reply: false
  auto_retry_time: 
  folder: crypto Currency 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /clc@grouphelpmrbeebot
CMD*/

if (!params) {
  Bot.sendMessage("⚠️ Incorrect Format use\n`/clc 1 btc usd`")
} else {
  var amount = params.split(" ")[0]
  var coin1 = params.split(" ")[1]
  var coin2 = params.split(" ")[2]
  if (
    !amount |
    !coin1 |
    !isNumeric(amount) |
    amount.includes("-") |
    amount.includes("+")
  ) {
    Bot.sendMessage("⚠️ Incorrect Format use\n`/clc 1 btc usd`")
    //
    return
  }
  if (!coin2) {
    var coin_2 = "usd"
  } else {
    var coin_2 = coin2
  }
  HTTP.get({
    url:
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" +
      coin_2.toLowerCase() +
      "&symbols=" +
      coin1.toLowerCase() +
      "&price_change_percentage=1h%2C24h%2C7d%2C30d",
    success: "/onConvert " + amount + " " + coin_2.toLowerCase()
  })
}

