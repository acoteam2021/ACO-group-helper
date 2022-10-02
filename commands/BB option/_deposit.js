/*CMD
  command: /deposit
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BB option
  answer: 💎Enter The amount which u want to Deposit💎

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var number = parseInt(message)
if (!number) {
  Bot.sendMessage("Amount Should be Number Only")
  return
}

var deposit_link = AdminPanel.getPanelField({
  panel_name: "BBpointPayment",
  field_name: "deposit_link"
})

var split = deposit_link.value.split("-")
split[1] = number

var link = split.join('-')

Bot.sendMessage("💎Here is your BB points Deposit Link\n\n" +  link)

