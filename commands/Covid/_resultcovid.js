/*CMD
  command: /resultcovid
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Covid

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var result = JSON.parse(content)
var country = User.getProperty("country")
var deat = result.deaths.value
var conf = result.confirmed.value
Bot.sendMessage("😷")

Bot.sendMessage(

  "*🚨COVID 19 DETAILS OF COUNTRY *" +
    country +
    "🚨\n\n*🚧 CONFIRMED --* " +
    conf +
    " people's \n\n*🚧DEATHS --* " +
    deat +
    " people's "
)

