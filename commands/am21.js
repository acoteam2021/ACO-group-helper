/*CMD
  command: am21
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

var r = JSON.parse(content)
if (r.result == [0]) {
  Bot.sendMessage("Not Found")
} else {
  var s = r.result[0].name
  var im1 = r.result[0].image
  var price1 = r.result[0].price
  var pl1 = r.result[0].product_link
  var buynowkey = [[{ text: "Buy Now!", url: pl1 }]]

  Api.sendPhoto({
    photo: im1,
    caption:
      "" +
      s +
      "\n💵Price: " +
      price1 +
      "\n🛒Product link: [Buy Now](" +
      pl1 +
      ")",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: buynowkey }
  })

  var s2 = r.result[1].name
  var im2 = r.result[1].image
  var price2 = r.result[1].price
  var pl2 = r.result[1].product_link
  var buynowkey = [[{ text: "💵Buy Now!", url: pl2 }]]

  Api.sendPhoto({
    photo: im2,
    caption:
      "" +
      s2 +
      "\nPrice: " +
      price2 +
      "\n🛒Product link: [Buy Now](" +
      pl2 +
      ")",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: buynowkey }
  })

  var s3 = r.result[2].name
  var im3 = r.result[2].image
  var price3 = r.result[2].price
  var pl3 = r.result[2].product_link
  var buynowkey = [[{ text: "💵Buy Now!", url: pl3 }]]

  Api.sendPhoto({
    photo: im3,
    caption:
      "" +
      s3 +
      "\nPrice: " +
      price3 +
      "\n🛒Product link: [Buy Now](" +
      pl3 +
      ")",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: buynowkey }
  })
  var s4 = r.result[3].name
  var im4 = r.result[3].image
  var price4 = r.result[3].price
  var pl4 = r.result[3].product_link
  var buynowkey = [[{ text: "💵Buy Now!", url: pl3 }]]

  Api.sendPhoto({
    photo: im4,
    caption:
      "" +
      s4 +
      "\nPrice: " +
      price4 +
      "\n🛒Product link: [Buy Now](" +
      pl4 +
      ")",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: buynowkey }
  })
  var s5 = r.result[4].name
  var im5 = r.result[4].image
  var price5 = r.result[4].price
  var pl5 = r.result[4].product_link
  var buynowkey = [[{ text: "💵Buy Now!", url: pl3 }]]

  Api.sendPhoto({
    photo: im5,
    caption:
      "" +
      s5 +
      "\nPrice: " +
      price5 +
      "\n🛒Product link: [Buy Now](" +
      pl5 +
      ")",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: buynowkey }
  })
  
  
  
  
  
  
  
  
  
}

