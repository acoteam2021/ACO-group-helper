/*CMD
  command: /p
  help: 
  need_reply: false
  auto_retry_time: 
  folder: crypto Currency 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /p@grouphelpmrbeebot
CMD*/

if (!params) {
  Bot.sendMessage("⚠️ Incorrect Format use\n`/p btc`")
  return
}
if (params) {
  var btc = params.split(" ")[0]
  var usd = params.split(" ")[1]
  if (!usd) {
    var usdt = "usd"
  } else {
    var usdt = params.split(" ")[1]
  }
  HTTP.get({
    url:
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" +
      usdt.toLowerCase() +
      "&symbols=" +
      btc.toLowerCase() +
      "&price_change_percentage=1h%2C24h%2C7d%2C30d",
    success: "/onPrice " + usdt
  })
} else {
  var btc = "btc"
  var usdt = "usd"
  HTTP.get({
    url:
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" +
      usdt.toLowerCase() +
      "&symbols=" +
      btc.toLowerCase() +
      "&price_change_percentage=1h%2C24h%2C7d%2C30d",
    success: "/onPrice " + usdt
  })
}
