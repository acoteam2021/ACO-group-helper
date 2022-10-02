/*CMD
  command: /onCountryinfo
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var Data = JSON.parse(content)

var Name = Data.name
var Capital = Data.capital
var Code = Data.code
var Region = Data.region
var Currencyname = Data.currency.name
var Currencycode = Data.currency.code
var Currencysymbol = Data.currency.symbol
var Picture = Data.flag
var Languagename = Data.language.name
var Languagecode = Data.language.code
var Dialingcode = Data.dialling_code

var Text =
  "<b>✅ Found Data\n\n▪️Name:</b> <code>" +
  Name +
  "</code>\n<b>▪️Capital:</b> <code>" +
  Capital +
  "</code>\n<b>▪️Code:</b> <code>" +
  Code +
  "</code>\n<b>▪️Region:</b> <code>" +
  Region +
  "</code>\n<b>▪️Currency name:</b> <code>" +
  Currencyname +
  "</code>\n<b>▪️Currency code:</b> <code>" +
  Currencycode +
  "</code>\n<b>▪️Currency symbol:</b> <code>" +
  Currencysymbol +
  "</code>\n<b>▪️Language name:</b> <code>" +
  Languagename +
  "</code>\n<b>▪️Language code:</b> <code>" +
  Languagecode +
  "</code>\n<b>▪️Dialing code:</b> <code>" +
  Dialingcode +
  "</code>"

var inlkey = [[{ text: "Thank You", url: "https://t.me/Bee_Family" }]]

if (Picture.includes("https://")) {
  Api.sendPhoto({
    photo: Picture,
    caption: Text,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inlkey }
  })
  return
}
Api.sendMessage({
  text: Text,
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inlkey }
})

