/*CMD
  command: /onGit
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

var re = JSON.parse(content)

if (re.message) {
  Bot.sendMessage(re.message)
  return
}

var name = re.name
//var uname = re.login
var id = re.id
var bio = re.bio
var hturl = re.html_url
var a_photo = re.avatar_url
var email = re.email
var location = re.location
var company = re.company
var repos = re.public_repos
var gists = re.public_gists
var fllwers = re.followers
var fllwing = re.following

var txt =
  "✅ Found From GitHub\n\n▪️ Name : " +
  name +
  "\n▪️ Id : " +
  id +
  "\n▪️ Bio : " +
  bio +
  "\n▪️ Type : " +
  re.type +
  "\n▪️ Email : " +
  email +
  "\n▪️ Location: " +
  location +
  "\n▪️ Company : " +
  company +
  "\n▪️ Total Repos : " +
  repos +
  "\n▪️ Total Gists : " +
  gists +
  "\n▪️ Followers : " +
  fllwers +
  "\n▪️ Following : " +
  fllwing +
  ""

if (a_photo && a_photo.includes("https://")) {
  Api.sendPhoto({
    photo: a_photo,
    caption: txt,
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "❓ Open in GitHub", url: "" + hturl + "" }]]
    }
  })
  return
}
Api.sendMessage({
  text: txt,
  parse_mode: "markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "❓ Open in GitHub", url: "" + hturl + "" }]]
  }
})

