/*CMD
  command: Grab
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Group Tip
  answer: 
  keyboard: 
  aliases: 
CMD*/

var grab = Bot.getProperty("giveaway_" + request.chat.id, { list: {} })
if (!params) {
  var grabs = Bot.getProperty("grab_" + request.chat.id, { list: {} })
  for (var ind in grabs.list) {
    var amount = grabs.list[ind].amount
    if (amount) {
      //77
    }
  }
  return
}
if (grab.list[params]) {
  var amount = grab.list[params].amount
//77
}

