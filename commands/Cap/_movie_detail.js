/*CMD
  command: /movie_detail
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Cap
  answer: *🎵 Enter Movie Name to Get All Movie Details*

  <<KEYBOARD

  KEYBOARD
  aliases: /movie_detail@grouphelpmrbeebot, /moviedetail, /moviedetail@grouphelpmrbeebot
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
var ko = data.message
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
var ko = ko.replace(" ", "%20")
User.setProperty("movie", message, "string")
HTTP.get({
  url: "http://www.omdbapi.com/?apikey=4d146d7&t=" + ko + "",
  success: "/onMode ",
  on_error: "/onMerror"
})


