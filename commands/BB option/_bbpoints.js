/*CMD
  command: /bbpoints
  help: 
  need_reply: false
  auto_retry_time: 
  folder: BB option

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /bbpoints@grouphelpmrbeebot
CMD*/

var buttons = [
[{title: "💎Deposit", command: "/deposit"}],
[{title: "💎Balance", command: "/balance"}],
[{title: "💎Withdraw", command: "/withdraw"}],
]
Bot.sendInlineKeyboard(buttons, "💎💎Welcome to the Demo BB Points payments Option.💎💎")

