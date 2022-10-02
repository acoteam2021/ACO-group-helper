/*CMD
  command: @
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



if (user.telegramid != 5514111111) {
  var mode = Bot.getProperty("mode")
  if (mode == "🛠️On✅") {
    var time = new Date().toLocaleString("en-US", {
      timeZone: "Asia/colombo"
    })
    var caption =
      "We detected some issues in our main database in Sri Lanka...so we activated maintenance mode...our admin or owner will fix it soon and turn off maintenance mode soon\n\n ⌚️𝗧𝗶𝗺𝗲 in Sri Lanka : " +
      time +
      ".  \n\n ⛔️ Bot Is Currently In Maintainace Mode.  "
    var photo = "https://t.me/SellerBotInHindi/14"
    Api.sendPhoto({ photo: photo, caption: caption })

    return
  }
}
if (user.telegramid != 5514111111) {
  var mode = Bot.getProperty("mode8")
  if (mode == "🔋On✅") {
    var time = new Date().toLocaleString("en-US", {
      timeZone: "Asia/colombo"
    })
    var caption =
      "We are currently Saving power, Please use Me after some  Hours~~ \n\n 🔋 Bot Is Currently In Power Saving Mode.  "
    var photo = "https://telegra.ph/file/808a6609220b73123fa26.jpg"
    Api.sendPhoto({ photo: photo, caption: caption })

    return
  }
}




function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
function toTimestamp(strDate) {
  var datum = Date.parse(strDate)
  return datum / 1000
}
function GetTime(seconds, time) {
  var add_time = parseFloat(time)
  var now = new Date()
  if (seconds == "seconds") {
    now.setSeconds(now.getSeconds() + add_time + 3)
  } else {
    if (seconds == "minutes") {
      now.setMinutes(now.getMinutes() + add_time)
    } else {
      if (seconds == "hours") {
        now.setHours(now.getHours() + add_time)
      } else {
        if (seconds == "days") {
          now.setDays(now.getDays() + add_time)
        }
      }
    }
  }
  var month = Libs.DateTimeFormat.format(now, "mm")
  var day = Libs.DateTimeFormat.format(now, "dd")
  var year = Libs.DateTimeFormat.format(now, "yyyy")
  var hour = Libs.DateTimeFormat.format(now, "HH")
  var minute = Libs.DateTimeFormat.format(now, "MM")
  var second = Libs.DateTimeFormat.format(now, "ss")
  var date = toTimestamp(
    month + "/" + day + "/" + year + " " + hour + ":" + minute + ":" + second
  )
  return date
}
//add user html
if (!user.username) {
  if (!user.first_name) {
    var html =
      "<a href='tg://user?id=" +
      user.telegramid +
      "'>" +
      user.last_name +
      "</a>"
  } else {
    var html =
      "<a href='tg://user?id=" +
      user.telegramid +
      "'>" +
      user.first_name +
      "</a>"
  }
} else {
  var html = "@" + user.username
}
//add user markdown
if (!user.username) {
  if (!user.first_name) {
    var markdown =
      "[" + user.last_name + "](tg://user?id=" + user.telegramid + ")"
  } else {
    var markdown =
      "[" + user.first_name + "](tg://user?id=" + user.telegramid + ")"
  }
} else {
  var markdown = "@" + user.username
}
Bot.setProperty(
  user.telegramid,
  { user_id: user.telegramid, markdown: markdown, html: html },
  "json"
)
//add user
if (user.username) {
  Bot.setProperty(
    "@" + user.username,
    { user_id: user.telegramid, markdown: markdown, html: html },
    "json"
  )
}
//reset every 1 hours
function canRun1() {
  var last_run_at = Bot.getProperty("online_1_hours_" + request.chat.id)
  if (!last_run_at) {
    return true
  }
  var resf = ""
  var minutes = (Date.now() - last_run_at) / 1000 / 60
  var minutes_in_day = 1 * 60
  if (minutes < minutes_in_day) {
    return resf
  }
  return true
}
//cooldown 20 seconds
function coolDown() {
  var last_run_at = User.getProperty("cooldown_" + request.chat.id)
  if (!last_run_at) {
    return true
  }
  var resf = ""
  var minutes = (Date.now() - last_run_at) / 100 / 20
  var minutes_in_day = 3 * 3
  if (minutes < minutes_in_day) {
    return resf
  }
  return true
}
//sorr
function doSort(a, b) {
  if (a.count > b.count) return -1
  if (a.count < b.count) return 1
}
function getOnline(top_count) {
  var online_top = Bot.getProperty("online_" + request.chat.id, { list: {} })
  var sortedList = []
  for (var keys in online_top.list) {
    var gff = Libs.ResourcesLib.anotherChatRes("gff", "global")
    var count = Libs.ResourcesLib.anotherUserRes(
      gff.value() + "_message_" + request.chat.id,
      online_top.list[keys].user.telegramid
    )
    sortedList.push({
      count: count.value(),
      userKey: online_top.list[keys].user.telegramid
    })
  }
  sortedList.sort(doSort)
  var result = []
  for (var i = 0; i < top_count; i++) {
    var item = sortedList[i]
    if (!item) {
      break
    }
    result.push(item)
  }
  return result
}
//get percentage
function Getko(users, amount, recent) {
  var random = Math.floor(Math.random() * (recent - 1))
  if (random == 0) {
    var rasta = 1
  } else {
    var rasta = random
  }
  var clc = (amount * rasta) / 100
  var dam = clc + "&" + random
  return dam
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
function toTimestamp(strDate) {
  var datum = Date.parse(strDate)
  return datum / 1000
}
function GetTime(seconds, time) {
  var add_time = parseFloat(time)
  var now = new Date()
  if (seconds == "seconds") {
    now.setSeconds(now.getSeconds() + add_time + 3)
  } else {
    if (seconds == "minutes") {
      now.setMinutes(now.getMinutes() + add_time)
    } else {
      if (seconds == "hours") {
        now.setHours(now.getHours() + add_time)
      } else {
        if (seconds == "days") {
          now.setDays(now.getDays() + add_time)
        }
      }
    }
  }
  var month = Libs.DateTimeFormat.format(now, "mm")
  var day = Libs.DateTimeFormat.format(now, "dd")
  var year = Libs.DateTimeFormat.format(now, "yyyy")
  var hour = Libs.DateTimeFormat.format(now, "HH")
  var minute = Libs.DateTimeFormat.format(now, "MM")
  var second = Libs.DateTimeFormat.format(now, "ss")
  var date = toTimestamp(
    month + "/" + day + "/" + year + " " + hour + ":" + minute + ":" + second
  )
  return date
}
//add user html
if (!user.username) {
  if (!user.first_name) {
    var html =
      "<a href='tg://user?id=" +
      user.telegramid +
      "'>" +
      user.last_name +
      "</a>"
  } else {
    var html =
      "<a href='tg://user?id=" +
      user.telegramid +
      "'>" +
      user.first_name +
      "</a>"
  }
} else {
  var html = "@" + user.username
}
//add user markdown
if (!user.username) {
  if (!user.first_name) {
    var markdown =
      "[" + user.last_name + "](tg://user?id=" + user.telegramid + ")"
  } else {
    var markdown =
      "[" + user.first_name + "](tg://user?id=" + user.telegramid + ")"
  }
} else {
  var markdown = "@" + user.username
}
Bot.setProperty(
  user.telegramid,
  { user_id: user.telegramid, markdown: markdown, html: html },
  "json"
)
//add user
if (user.username) {
  Bot.setProperty(
    "@" + user.username,
    { user_id: user.telegramid, markdown: markdown, html: html },
    "json"
  )
}
//reset every 1 hours
function canRun1() {
  var last_run_at = Bot.getProperty("online_1_hours_" + request.chat.id)
  if (!last_run_at) {
    return true
  }
  var resf = ""
  var minutes = (Date.now() - last_run_at) / 1000 / 60
  var minutes_in_day = 1 * 60
  if (minutes < minutes_in_day) {
    return resf
  }
  return true
}
//cooldown 20 seconds
function coolDown() {
  var last_run_at = User.getProperty("cooldown_" + request.chat.id)
  if (!last_run_at) {
    return true
  }
  var resf = ""
  var minutes = (Date.now() - last_run_at) / 100 / 20
  var minutes_in_day = 3 * 3
  if (minutes < minutes_in_day) {
    return resf
  }
  return true
}
//sorr
function doSort(a, b) {
  if (a.count > b.count) return -1
  if (a.count < b.count) return 1
}
function getOnline(top_count) {
  var online_top = Bot.getProperty("online_" + request.chat.id, { list: {} })
  var sortedList = []
  for (var keys in online_top.list) {
    var gff = Libs.ResourcesLib.anotherChatRes("gff", "global")
    var count = Libs.ResourcesLib.anotherUserRes(
      gff.value() + "_message_" + request.chat.id,
      online_top.list[keys].user.telegramid
    )
    sortedList.push({
      count: count.value(),
      userKey: online_top.list[keys].user.telegramid
    })
  }
  sortedList.sort(doSort)
  var result = []
  for (var i = 0; i < top_count; i++) {
    var item = sortedList[i]
    if (!item) {
      break
    }
    result.push(item)
  }
  return result
}
//get percentage
function Getko(users, amount, recent) {
  var random = Math.floor(Math.random() * (recent - 1))
  if (random == 0) {
    var rasta = 1.5
  } else {
    var rasta = random
  }
  var clc = (amount * rasta) / 100
  var dam = clc + "&" + rasta
  return dam
}

