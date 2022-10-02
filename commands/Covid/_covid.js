/*CMD
  command: /covid
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Covid

  <<ANSWER
SEND COUNTRY NAME 📛

NOTE !! 
ADD + INSTEAD OF GAP 

LIKE :- 
             Sri+Lanka



  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /covid@grouphelpmrbeebot
CMD*/

User.setProperty("country",message,"string")
HTTP.get({
  url:
    "https://covid19.mathdro.id/api/countries/"+message+"",
  success: "/resultcovid"
})
