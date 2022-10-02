/*CMD
  command: 8169
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
    ],
    [
      { title: "🤖 Make Your Bot", command: "AddBot" },
      { title: " 🏝 My Bots", command: "MyBots" }
    ]
  ]
  Bot.sendInlineKeyboard(
    buttons,
    "Hello》》" +
      user.first_name +
      " \n ↻I'm @GroupHelpMrBeeBot  \n\n⚔️⚔️⚔️⚔️⚔️⚔️⚔️⚔️ ⚔️⚔️⚔️\n\nAn advanced telegram Group  management Bot to manage your groups \n and protect your groups & for all your needs.\n🍂🍂🍂🍂\n🍂I can chat with you like real A.I bot and you can enable this option on your groups, using \n /enableAI \n command and\n  disable it using \n /disableAI \n command.\n\n\n"
  )


