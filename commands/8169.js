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
    [{ title: "Main menuโก๏ธ", command: "/ShowCDM back" }],
    [{ title: "Info & About ๐โโ๏ธ", command: "/about" }],
    [
      { title: "๐ซ News", url: "https://t.me/ACOBotsUpdates" },
      { title: "๐ฅ support", url: "https://t.me/acobot_Team" }
    ],
    [
      {
        title: "โ Add me to your Group โ",
        url: "https://telegram.me/" + bot.name + "?startgroup=true"
      }
    ],
    [
      {
        title: "๐๏ธOur Privacyโ",
        url:
          "https://www.termsfeed.com/live/77a22a14-d078-4d94-b9de-8bb180e2c50a"
      }
    ],
    [
      {
        title: "๐๏ธOwnerโ",
        url: "https://t.me/Splash_Pro"
      }
    ],
    [
      { title: "๐ค Make Your Bot", command: "AddBot" },
      { title: " ๐ My Bots", command: "MyBots" }
    ]
  ]
  Bot.sendInlineKeyboard(
    buttons,
    "Helloใใ" +
      user.first_name +
      " \n โปI'm @GroupHelpMrBeeBot  \n\nโ๏ธโ๏ธโ๏ธโ๏ธโ๏ธโ๏ธโ๏ธโ๏ธ โ๏ธโ๏ธโ๏ธ\n\nAn advanced telegram Group  management Bot to manage your groups \n and protect your groups & for all your needs.\n๐๐๐๐\n๐I can chat with you like real A.I bot and you can enable this option on your groups, using \n /enableAI \n command and\n  disable it using \n /disableAI \n command.\n\n\n"
  )


