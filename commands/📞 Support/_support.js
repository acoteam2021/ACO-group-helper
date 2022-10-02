/*CMD
  command: /support
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 📞 Support

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/


var button = [
[{ title : "✏️Write Me" , command : "/text123" }],
[{ title : "📷Send Photos " , command : "Support" }]
]
Bot.sendInlineKeyboard(button , "*Hello user~"+ 
user.first_name +"~Now choose an option to contact us ....*")
