/*CMD
  command: /acceptRequest
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

// we have params like req10-X-points-to-TgID
let req = parseRequestParams() // { amount: X, transferred_to_tg_id: Y }

params = params + "-" + request.message.message_id + "-" + request.id;

if(!havePointOnRequest(req)){ return }

// make notification by webhook
HTTP.post( {
   url: req.webhook_url,
   success: "/afterNotify " + params,
   error: "/afterNotifyError " + params,
   body: req
})

