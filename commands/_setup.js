/*CMD
  command: /setup
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

var deposit_url = Libs.Webhooks.getUrlFor({
  command: "onBBPointIncome"
})

var panel = {
  title: "BB Points Payment",
  description: "Please fill here your payment details",
  index: 0,
  icon: "key",
  button_title: "SAVE",
  fields: [
    {
      name: "ADMIN_ID",
      title: "Admin ID",
      description:
        "you can get your admin_id with BJS Bot.sendMessage(user.id)",
      type: "integer",
      placeholder: "Your Admin telegram ID"
    },
    {
      name: "deposit_link",
      title: "Deposit Link",
      description:
        "Go to @BBpoinyBot -> /link -> And paste the Bot Deposit Webhook link Present Upside",
      type: "string",
      placeholder: "Link Got from @BBpointBot"
    },
    {
      name: "transfer_link",
      title: "Transfer Link (Withdrwl Link)",
      description: "Go to @BBpoinyBot -> /getTransferUrl",
      type: "string",
      placeholder: "Link Got from @BBpointBot"
    },
    {
      name: "bot_deposit_webhook_link",
      title: "Bot Deposit Webhook Link",
      description: deposit_url
    }
  ]
}

AdminPanel.setPanel({
  panel_name: "BBpointPayment",
  data: panel
})

Bot.sendMessage("Setup: OK")
return // remove this for setup

var panel = {
  // Panel title
  title: "Admin Information",
  description: "Please fill here your admin id",
  // order index
  index: 0,
  icon: "key",
  // save button title - default "SAVE"
  button_title: "SAVE",
  // command called on saving
  // not necessary
  /* on_saving:{
     command: "/on-saving",
     // if you need user
     user_id: user_id // Get it via Bot.sendMessage(user.id)
  },
  */
  
  // Fields for this Panel
  // here 1 field only
  fields: [
    {
      name: "ADMIN_ID",
      title: "Admin ID",
      description: "you can get your admin_id with BJS Bot.sendMessage(user.id)",
      type: "string",
      placeholder: "your admin id",
      // value: 100
    }
    // another fields here
    // if needed
    // ...
  ]
}

AdminPanel.setPanel({
  panel_name: "AdminInfo",
  data: panel
  // force: true // default false - save fields values
});



var panel = {
  title: "Options",
  description: "Options for bot",
  index: 1,
  icon: "hammer",
  fields: [
    {
      name: "InfoChannel",
      title: "Info chanell",
      description: "All transfers will be published in this chanell",
      type: "string",
      placeholder: "@chanellName",
      icon: "notifications"
    }
  ]
}

AdminPanel.setPanel({
  panel_name: "Options",
  data: panel
  // force: true // default false - save fields values
});



var panel = {
  title: "Angry Points",
  description: "Setup for the master Removeable Points",
  index: 2,
  icon: "settings",
  on_saving: {
    command: "/setAngryPoints"
  },
  fields: [
    {
      name: "masterId",
      title: "Master Telegram ID",
      description:
        "you can get your Master id with BJS Bot.sendMessage(user.telegramid)",
      type: "string",
      placeholder: "master telegram id"
    },
    {
      name: "maxLimit",
      title: " Angry Points Limit",
      description: "Enter the limit for removing Point for single request",
      type: "integer",
      placeholder: "1"
    },
    {
      name: "hourlyGrowth",
      title: "Angry Points Hourly Growth",
      description: "Amount for Angry Points Growth per hours",
      type: "integer",
      placeholder: "2"
    },
    {
      name: "maxGrowthLimit",
      title: " Angry Points Max Limit",
      description: "Enter the Max limit of angry point each master can have",
      type: "integer",
      placeholder: "50"
    }
  ]
}

AdminPanel.setPanel({
  panel_name: "AngryPoints",
  data: panel
})


Bot.sendMessage("Admin Panels setupped." + 
  "\n\nYour admin id is: ```" + user.id + "```" +
  "\n\nCur chat id is: ```" + chat.id + "```"
)

