/*CMD
  command: /start_22
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Command

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

  
  
  
  
  var buttons = [
    [{ title: "Main menuâ¡ï¸", command: "/ShowCDM back" }],
    [{ title: "Info & About ðââï¸", command: "/about" }],
    [
      { title: "ð« News", url: "https://t.me/Bee_FamilyUpdates" },
      { title: "ð¥ support", url: "https://t.me/Bee_Family" }
    ],
    [
      {
        title: "â Add me to your Group â",
        url: "https://telegram.me/" + bot.name + "?startgroup=true"
      }
    ],      
        [{ title: "ðï¸Our Privacyâ", url: "https://www.termsfeed.com/live/77a22a14-d078-4d94-b9de-8bb180e2c50a" }]
    
    
    
    
  ]
  Bot.sendInlineKeyboard(
    buttons,
    "Helloãã" +
      user.first_name +
      " \n â»I'm @" +
      bot.name +
      " \n\nâï¸âï¸âï¸âï¸âï¸âï¸âï¸âï¸ âï¸âï¸âï¸\n\nAn advanced telegram Group  management Bot to manage your groups \n and protect your groups & for all your needs."
  )
