/*CMD
  command: country/de
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

var re = JSON.parse(content)

if(re.message){
Bot.sendMessage(re.message)
return
}

var name = re.name
var uname = re.login
var dob = re.dob
var gender = re.gender
var phone = re.phone
var photo = re.photo
var cell = re.cell
var location = re.location
var email = re.email

var txt = "✅ Found New User"

"▪️ Name : "+name+
"▪️ Uname : "+
uname+
"▪️ DOB : "+dob+
"▪️ Gender : "+gender+
"▪️ Email : "+email+
"▪️ Location: "+location+
"▪️ Phone : "+
phone+
"▪️ Cell : "+cell+

if(photo&&photo.includes("https://")){
Api.sendPhoto({
  photo: photo,
  caption: txt,
  parse_mode: "markdown",disable_web_page_preview:true,
  reply_markup:{
                 inline_keyboard: [[{text: "Thank You" ,url: ""https://t.me/botdiscuoo"" }]]
               }
})
return
}
Api.sendMessage({
  text: txt,
  parse_mode: "markdown",disable_web_page_preview:true,
  reply_markup:{
                 inline_keyboard: [[{text: "Thank You" ,url: ""https://t.me/botdiscuoo"" }]]
               }
})
