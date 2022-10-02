/*CMD
  command: /amazon
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter your product name....

  <<KEYBOARD

  KEYBOARD
  aliases: /amazon@grouphelpmrbeebot, /amazon@grouphelpmrbeebot
CMD*/

var d = ""+encodeURI(message+"")
HTTP.get({url:"https://amazon-scraper.tprojects.workers.dev/search/"+d+"",success:"am2"})


