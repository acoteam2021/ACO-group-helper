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
    [{ title: "Main menu➡️", command: "/ShowCDM back" }],
    [{ title: "Info & About 🙋‍♂️", command: "/about" }],
    [
      { title: "💫 News", url: "https://t.me/Bee_FamilyUpdates" },
      { title: "👥 support", url: "https://t.me/Bee_Family" }
    ],
    [
      {
        title: "➕ Add me to your Group ➕",
        url: "https://telegram.me/" + bot.name + "?startgroup=true"
      }
    ],      
        [{ title: "🛅️Our Privacy☞", url: "https://www.termsfeed.com/live/77a22a14-d078-4d94-b9de-8bb180e2c50a" }]
    
    
    
    
  ]
  Bot.sendInlineKeyboard(
    buttons,
    "Hello》》" +
      user.first_name +
      " \n ↻I'm @" +
      bot.name +
      " \n\n⚔️⚔️⚔️⚔️⚔️⚔️⚔️⚔️ ⚔️⚔️⚔️\n\nAn advanced telegram Group  management Bot to manage your groups \n and protect your groups & for all your needs."
  )
