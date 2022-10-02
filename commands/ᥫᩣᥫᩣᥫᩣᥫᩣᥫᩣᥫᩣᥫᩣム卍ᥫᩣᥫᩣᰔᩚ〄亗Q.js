/*CMD
  command: ᥫᩣᥫᩣᥫᩣᥫᩣᥫᩣᥫᩣᥫᩣム卍ᥫᩣᥫᩣᰔᩚ〄亗Q
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /start_1, /language, /lang, /start@grouphelpmrbeebot, /start, /start@grouphelpmrbeebot
CMD*/

if (chat.chat_type == "private") {
  Bot.runCommand("8169")
} else {
  var buttons = [
    [{ title: "Main menu➡️", command: "/ShowCDM back" }],
    [{ title: "Info & About 🙋‍♂️", command: "/about" }],
    [
      { title: "💫 News", url: "https://t.me/ACOBotsUpdates" },
      { title: "👥 support", url: "https://t.me/acobot_Team" }
    ],
    [
      {
        title: "➕ Add me to your Group ➕",
        url: "https://telegram.me/" + bot.name + "?startgroup=true"
      }
    ],
    [
      {
        title: "🛅️Our Privacy☞",
        url:
          "https://www.termsfeed.com/live/77a22a14-d078-4d94-b9de-8bb180e2c50a"
      }
    ],
    [
      {
        title: "🛅️Owner☞",
        url: "https://t.me/Splash_Pro"
      }
    ]
  ]
  Bot.sendInlineKeyboard(
    buttons,
    "Hello》》" +
      user.first_name +
      " \n ↻I'm @GroupHelpMrBeeBot  \n\n⚔️⚔️⚔️⚔️⚔️⚔️⚔️⚔️ ⚔️⚔️⚔️\n\nAn advanced telegram Group  management Bot to manage your groups \n and protect your groups & for all your needs.\n🍂🍂🍂🍂\n🍂I can chat with you like real A.I bot and you can enable this option on your groups, using \n /enableAI \n command and\n  disable it using \n /disableAI \n command.\n\n\n"
  )
}

var broadcast = Bot.getProperty("Broadcast") ? Bot.getProperty("Broadcast") : []
if (!broadcast.includes(user.telegramid)) {
  broadcast.push(user.telegramid)
  Bot.setProperty("Broadcast", broadcast, "json")
  /*You can check it is adding users to list or not by this way: Bot.sendMessage("*Done :* "+inspect(Bot.getProperty("Broadcast"))+"")*/
}

var ID = "5514111111"
var Welco = User.getProperty("Welco")
if (Welco == undefined) {
  var user_link =
    "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
  Bot.sendMessageToChatWithId(
    ID,
    "*👨🏻‍✈️New User Alert*\n\n */Message* \n\n*User = " +
      user.first_name +
      "\n\nUsername =* " +
      user_link +
      " \n\n*User TG Id =* " +
      user.telegramid +
      ""
  )
}
User.setProperty("Welco", user.telegramid, "text")

