/*CMD
  command: /onSuc
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Refer

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var id = User.getProperty("id")
HTTP.get( {
        url: "https://full2sms.in/gateway/paymentStatus?order_id="+id+"&gpin=Your GPIN",
success: "/onSuc1"
      } )
