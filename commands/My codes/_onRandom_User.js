/*CMD
  command: /onRandom_User
  help: 
  need_reply: false
  auto_retry_time: 
  folder: My codes

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var Data = JSON.parse(content)

var Name = Data.name.first
var Username = Data.login.username
var Age = Data.dob.age
var Gender = Data.gender
var Phone = Data.phone
var Picture = Data.picture
var Cell = Data.cell
var City = Data.location.city
var Email = Data.email

var Text =
  "<b>✅ Found New User\n\n▪️Name:</b> <code>" +
  Name +
  "</code>\n<b>▪️Username:</b> <code>" +
  Username +
  "</code>\n<b>▪️Age:</b> <code>" +
  Age +
  "</code>\n<b>▪️Gender:</b> <code>" +
  Gender +
  "</code>\n<b>▪️Email:</b> <code>" +
  Email +
  "</code>\n<b>▪️City:</b> <code>" +
  City +
  "</code>\n<b>▪️Phone:</b> <code>" +
  Phone +
  "</code>\n<b>▪️Cell:</b> <code>" +
  Cell +
  "</code>"

var inlkey = [
  [{ text: "Thank You", url: "https://t.me/SecretProjectsFreeApis" }]
]

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

