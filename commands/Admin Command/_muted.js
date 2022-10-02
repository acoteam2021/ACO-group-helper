/*CMD
  command: /muted
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

var id = Bot.getProperty(params.split(" ")[0])
var time = params.split(" ")[1]
var key = params.split(" ")[2]
var optional = params.split(" ")[3]
if (optional == "und") {
  var due = ""
} else {
  if (!params.split(key)[1]) {
    var due = "\n• <b>Due to</b>:" + params.split(key)[1]
  } else {
    var due = "\n• <b>Due to</b>:" + params.split(""+key+"")[2]
  }
}
if (key == "und") {
  if (time == "und") {
    var ff = "• <b>Release</b>: forever" + due
  } else {
    var ff = "• <b>Release</b>: forever"
  }
  var text = ff
} else {
  var text = "• <b>Release</b>: " + time + " " + key + due
}
Api.sendMessage({
  text: id.html + " has been 🔇 muted.\n" + text,
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "✅ Unmute",
          callback_data:
            "/2ndunmute " +
            params.split(" ")[0] +
            " " +
            time +
            " " +
            key +
            " " +
            optional
        }
      ]
    ]
  },
  parse_mode: "html"
})
