/*CMD
  command: /withdraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BB option
  answer: Enter The amount of BB point which u want to withdraw

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var number = parseInt(message)
if (!number) {
  Bot.sendMessage("Amount Should be Number Only")
  return
}

var amount = number
var bbpoints = Libs.ResourcesLib.userRes("bbpoints")

if (bbpoints.value() < amount) {
  Bot.sendMessage(
    "Amount is greater than your balance\n\nYou have : " + bbpoints.value()
  )
  return
}

var webhookUrl = Libs.Webhooks.getUrlFor({
  command: "onTransfer",
  user_id: user.id
})

Bot.sendMessage("Transfer in progress")

var transfer_link = AdminPanel.getPanelField({
  panel_name: "BBpointPayment",
  field_name: "transfer_link"
})

HTTP.post({
  url: transfer_link.value,
  body: {
    amount: amount,
    to_tg_id: user.telegramid,
    note: "Transfer from " + bot.name,
    webhookUrl: webhookUrl
  }
})

