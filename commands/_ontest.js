/*CMD
  command: /ontest
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var json = Bot.getProperty("Data_" + request.chat.id)
Bot.inspect(json)
Bot.inspect(options)

