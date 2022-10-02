/*CMD
  command: onBBPointIncome
  help: 
  need_reply: false
  auto_retry_time: 
  folder: BB option

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (!content) {
  return
}

var contents = JSON.parse(content)
var transferred_to_tg_id = contents.transferred_to_tg_id
var transferreds_from_tg_id = contents.user
var transferred_from_tg_id = transferreds_from_tg_id.telegramid
var amount = parseInt(contents.amount)

var admin_id = AdminPanel.getPanelField({
  panel_name: "BBpointPayment",
  field_name: "ADMIN_ID"
})

if (transferred_to_tg_id != admin_id.value) {
  Bot.sendMessage("Seem To be Something went wrong")
  return
}

var bbpoints = Libs.ResourcesLib.anotherUserRes(
  "bbpoints",
  transferred_from_tg_id
)
bbpoints.add(amount)

Api.sendMessage({
  chat_id: transferred_from_tg_id,
  text: "💎Successfully Deposited BB Point\n\nAmount : " + amount
})

