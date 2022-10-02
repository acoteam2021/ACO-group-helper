/*CMD
  command: /captchaE
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

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var arr = [
  "🤖",
  "👁",
  "💼",
  "🐟",
  "🌹",
  "🌞",
  "🌎",
  "🍔",
  "🍩",
  "🥃",
  "⚽️",
  "🏋‍♂",
  "🏄‍♂",
  "🤹‍♀",
  "🎲",
  "🎮",
  "🚗",
  "🚀",
  "🛰",
  "🚦",
  "🏪",
  "📱",
  "💵",
  "💣",
  "🎁",
  "💌",
  "📚",
  "🔐",
  "💔",
  "☢",
  "♻️",
  "5⃣",
  "✖️",
  "🔈",
  "🏳",
  "🏁"
]

function shuffleArray(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

function rndFloat(min, max) {
  return Math.random() * (max - min + 1) + min
}

function rndInt(min, max) {
  return Math.floor(rndFloat(min, max))
}

var index = rndInt(0, 9)

var newArray = shuffleArray(arr)

//Bot.inspect(newArray)

var userAns = newArray[index]

User.setProperty("userAns", userAns, "string")

var quiz1 = newArray[5]
var quiz2 = newArray[0]
var quiz3 = newArray[1]
var quiz4 = newArray[9]
var quiz5 = newArray[3]
var quiz6 = newArray[2]
var quiz7 = newArray[7]
var quiz8 = newArray[6]
var quiz9 = newArray[8]
var quiz10 = newArray[4]

var inline = [
  [
    { title: quiz1, command: "/ans " + quiz1 },
    { title: quiz2, command: "/ans " + quiz2 }
  ],
  [
    { title: quiz3, command: "/ans " + quiz3 },
    { title: quiz4, command: "/ans " + quiz4 }
  ],
  [
    { title: quiz5, command: "/ans " + quiz5 },
    { title: quiz6, command: "/ans " + quiz6 }
  ],
  [
    { title: quiz7, command: "/ans " + quiz7 },
    { title: quiz8, command: "/ans " + quiz8 }
  ],
  [
    { title: quiz9, command: "/ans " + quiz9 },
    { title: quiz10, command: "/ans " + quiz10 }
  ]
]

Bot.sendInlineKeyboard(
  inline,
  "Hello Dear, @" +
  username + 
  " *❇️ Verify You Are Human Select the Same Emoji as \n         " +
    userAns +
    "       From The Keyboard Given below*"
)
