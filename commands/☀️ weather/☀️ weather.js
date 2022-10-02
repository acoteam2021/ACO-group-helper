/*CMD
  command: ☀️ weather
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ☀️ weather
  answer: Send your City...

  <<KEYBOARD

  KEYBOARD
  aliases: /weather@grouphelpmrbeebot, /weather
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
HTTP.get({
  url: "http://api.weatherapi.com/v1/current.json?key=2e496852627641b0a37123040212608&q=" +
    message +
    "&aqi=yes",
  success: "rr"})
