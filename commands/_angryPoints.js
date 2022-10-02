/*CMD
  command: /angryPoints
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

var availableAngryPoints = Libs.ResourcesLib.userRes("availableAngryPoints");

Bot.sendMessage(
  "This Point can be used to remove the BB Points from the User\n\nYour Angry Points:- " +
   availableAngryPoints.value()
)

