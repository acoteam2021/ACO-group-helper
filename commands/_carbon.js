/*CMD
  command: /carbon
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send something to make carbon image...

  <<KEYBOARD

  KEYBOARD
  aliases: /carbon@grouphelpmrbeebot
CMD*/

Api.sendPhoto({
  photo: "https://carbonnowsh.herokuapp.com/?code=" + message + "",
  caption: "*🆔 Carbonised By :-@" + bot.name + "*",
  parse_mode: "markdown"
})

