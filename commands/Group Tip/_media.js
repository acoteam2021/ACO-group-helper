/*CMD
  command: /media
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Group Tip

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/


Bot.sendMessage( "Hello ["+user.first_name+"](tg://user?id="+user.telegramid+"), I'm small media or file to link uploader bot.\n\n- Just give me a media up to 10MB\n- Then I will download it\n- I will then upload it to link",{ is_reply: true }) 
Bot.runCommand("upload_1") 

