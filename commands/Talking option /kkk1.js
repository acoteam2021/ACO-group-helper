/*CMD
  command: kkk1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Talking option 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var d = "" + encodeURI(params + "")
HTTP.get({
  url:
    "http://api.brainshop.ai/get?bid=168961&key=9GEjxayoYuNe3NEB&uid=shab3Gsh7&msg=" +
    d +
    "",
  success: "/ontalk"
})
}
