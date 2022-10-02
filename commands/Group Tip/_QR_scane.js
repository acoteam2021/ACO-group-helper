/*CMD
  command: /QR_scane
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Group Tip
  answer: Send something.....

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

HTTP.get({
  url: "http://api.qrserver.com/v1/read-qr-code/?fileurl=" + message + "",
  success: "scane"
})

