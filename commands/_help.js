/*CMD
  command: /help
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /help@grouphelpmrbeebot
CMD*/

var buttons = [
    [{ title: "Command Help➡️", command: "/ShowCDM back" }],
    [{ title: "Info & About 🙋‍♂️", command: "/about" }],
    [
      { title: "💫 News", url: "https://t.me/Bee_FamilyUpdates" },
      { title: "👥 support", url: "https://t.me/Bee_Family" }
    ],
   
        [{ title: "🛅️Our Privacy☞", url: "https://www.termsfeed.com/live/77a22a14-d078-4d94-b9de-8bb180e2c50a" }]
    
    
    
    
  ]
  Bot.sendInlineKeyboard(
    buttons,
    "Hello》》" +
      user.first_name +
      " \n\n ↻Help Menu Opened by\n    @" +
      bot.name +
      " Successfully."
  )



