/*CMD
  command: c
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

var add = User.getProperty("TRXwallet")
var   ctext = "**"
var button =   [[{ text:"๐User : "+user.first_name+"" , url:"https://t.me/"+user.username+"" },{text:"๐ "+user.telegramid+"" , url:"https://t.me/"+user.username+"" }],
[{ text:"๐Email: "+add+"" , url:"https://t.me/"+add+"" }],
[{ text:"๐ด Amount : "+message+"LTC" , url:"https://t.me/"+bot.name+"" }],
  [{ text:"๐ค Bot Link : @"+bot.name+"" , url:"https://t.me/"+bot.name+"" }]]
if (message < 5) {
    Bot.sendMessage("_โ Minimum Withdraw 5 TRX_")
}else     
 Api.sendMessage({
text:"PAID"})
Api.sendPhoto({
        chat_id: "@Bee_Family ",
  photo:"https://t.me/vip_bot_coding_discuss/2931",
  caption: ctext,
  parse_mode:
"Markdown",disable_web_page_preview: true,
reply_markup: {inline_keyboard: button}
})
Bot.sendInlineKeyboard(button,ctext)

