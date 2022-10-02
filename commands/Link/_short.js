/*CMD
  command: /short
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Link
  answer: Send your link.

  <<KEYBOARD

  KEYBOARD
  aliases: /short
CMD*/

var apikey = "3de0d31af3fde948f935c35075f613ea2d046a3e" 
 let link = message
function detectURLs(msg) { 
  var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g 
  return msg.match(urlRegex) 
} 
let urlg = detectURLs(link) 
for (const links of urlg) { 
  var url ="https://api-ssl.bitly.com/v3/shorten?access_token=" + apikey + "&longUrl=" + links 
  HTTP.post({ 
    url: url, 
    success: "/onshort" 
  }) 
}
