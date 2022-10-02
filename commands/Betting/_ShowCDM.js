/*CMD
  command: /ShowCDM
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Betting

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var name = params.split(" ")[0]
if (name == "back") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "Hello》》" +
      user.first_name +
      " \n ↻I'm @" +
      bot.name +
      " \n\n⚔️⚔️⚔️⚔️⚔️⚔️⚔️⚔️ ⚔️⚔️⚔️\n\nAn advanced telegram Group  management Bot to manage your groups \n and protect your groups & for all your needs ",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💣 Check Price", callback_data: "/ShowCDM price" },
          { text: "Change Language🏞️ ", callback_data: "/ShowCDM lang" }
        ],
        [
          { text: "🌐 Group Manager", callback_data: "/ShowCDM manager" },
          { text: "🎮 Other Commands", callback_data: "/ShowCDM other" }
        ],
        [
          {
            text: "🚀 Add Me To A Group 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}

if (name == "price") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "*Crypto Price Command*\n\n/p – Check price of coin\n/price – Check price of coin\n/calculate – Convert coin price\n/clc – Convert coin price",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💣 Check Price", callback_data: "/ShowCDM price" },
          { text: "Change Language🏞️ ", callback_data: "/ShowCDM lang" }
        ],
        [
          { text: "🌐 Group Manager", callback_data: "/ShowCDM manager" },
          { text: "🎮 Other Commands", callback_data: "/ShowCDM other" }
        ],
        [
          {
            text: "🚀 Add Me To A Group 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}

if (name == "lang") {
  
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "★᭄ꦿ᭄ꦿ    Select your language        ★᭄ꦿ᭄ꦿ ",

    reply_markup: {
      inline_keyboard: [
        [
          { text: "🇱🇰සිංහල🇱🇰", callback_data: "/ShowCDM sin" },

          { text: "🇬🇧English🇬🇧", callback_data: "/ShowCDM back" }
        ],
        [
          { text: "🇮🇳हिन्दी🇮🇳", callback_data: "/ShowCDM hin" }],
        [{ text: "Back🔙", callback_data: "/ShowCDM back" }],
        [
          {
            text: "🚀 Add Me To A Group 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}
if (name == "manager") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "*Group Manager Command*\n\n/kick – kick user\n/ban – ban user\n/unban – unban user\n/mute – mute user\n/unmute – unmute user\n/warn – warn user\n/info – get info user\n/banwords – ban words\n/autodelete – delete join/leave messages\n/admin – get administration\n/translate – translate\n\nYou need to run command /admin in your group to use all admin commands",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💣 Check Price", callback_data: "/ShowCDM price" },
          { text: "Change Language🏞️ ", callback_data: "/ShowCDM lang" }
        ],
        [
          { text: "🌐 Group Manager", callback_data: "/ShowCDM manager" },
          { text: "🎮 Other Commands", callback_data: "/ShowCDM other" }
        ],
        [
          {
            text: "🚀 Add Me To A Group 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}

if (name == "other") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "Here  is the help for the: Other ⚡\n\n☟☟☟☟☟☟\n⚡/tToVoice⇒》(to turn text into voice  )\n⚡/movieDetail ⇒》(to get movie details )\n⚡/amazon ⇒》(to search amazon products)\n⚡/webapp ⇒》(open websites) \n⚡/pin ⇒》(pin messages)\n⚡/carbon ⇒》(to make carbon image)\n⚡photo ⇒》(to get your friend profile photos \n⚡/weather ⇒》(to get weather infomation)\n⚡/ytthumb ⇒》(to get youtube thumbnail)\n⚡/logo ⇒》(to generet logo)\n⚡/covid ⇒》(to get covid-19 details )\n⚡/getDetails ⇒》(to get forward message details  )\n⚡/predict ⇒》(  ♀️♂️ Gender Prediction )\n⚡/lyrics ⇒》(Lyrics Seacher )\n⚡/calculater ⇒》(Calculating Options )\n⚡/spam ⇒》(Spamming Options )",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💣 Check Price", callback_data: "/ShowCDM price" },
          { text: "Change Language🏞️ ", callback_data: "/ShowCDM lang" }
        ],
        [
          { text: "🌐 Group Manager", callback_data: "/ShowCDM manager" },
          { text: "🎮 Other Commands", callback_data: "/ShowCDM other" }
        ],
        [
          {
            text: "🚀 Add Me To A Group 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}

////////////////////////////////////sri lanka /////////////////////////

if (name == "sin") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "හොදයි, මෙතැන් සිට මම ඔබ සමග සිංහල 🇱🇰 භාෂාවෙන් කටයුතු කරනු ඇත.",

    reply_markup: {
      inline_keyboard: [
        [
          { text: "💣 මුදල් බැලීමට", callback_data: "/ShowCDM pricesi" },
          { text: "භාශාව වෙනස් කිරීම🏞️ ", callback_data: "/ShowCDM langsi" }
        ],
        [
          { text: "🌐 ගෲප් සහායක", callback_data: "/ShowCDM managersi" },
          { text: "🎮 වෙනත් විධාන", callback_data: "/ShowCDM othersi" }
        ],
        [
          {
            text: "🚀 මාව සමූහයකට එක් කිරීමට 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}

if (name == "langsi") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "★᭄ꦿ᭄ꦿ    ඔබගේ භාශාව  තෝරන්න ★᭄ꦿ᭄ꦿ ",

    reply_markup: {
      inline_keyboard: [
        [
          { text: "🇱🇰සිංහල🇱🇰", callback_data: "/ShowCDM sin" },
          { text: "🇬🇧English🇬🇧", callback_data: "/ShowCDM back" }
        ],
        [
          { text: "🇮🇳हिन्दी🇮🇳", callback_data: "/ShowCDM hin" }],
        [{ text: "පිටවීම🔙", callback_data: "/ShowCDM backsi" }],
        [
          {
            text: "🚀  මාව සමූහයකට එක් කිරීමට 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}

if (name == "pricesi") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "*Crypto මුදල් විධාන*\n\n/p – Check price of coin\n/price – Check price of coin\n/calculate – Convert coin price\n/clc – Convert coin price",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💣 මුදල් බැලීමට", callback_data: "/ShowCDM pricesi" },
          { text: "භාශාව වෙනස් කිරීම🏞️ ", callback_data: "/ShowCDM langsi" }
        ],
        [
          { text: "🌐 ගෲප් සහායක", callback_data: "/ShowCDM managersi" },
          { text: "🎮 වෙනත් විධාන", callback_data: "/ShowCDM othersi" }
        ],
        [
          {
            text: "🚀 මාව සමූහයකට එක් කිරීමට 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}
if (name == "managersi") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "*ගෲප් සහයක විධාන*\n\n/kick – kick user\n/ban – ban user\n/unban – unban user\n/mute – mute user\n/unmute – unmute user\n/warn – warn user\n/info – get info user\n/banwords – ban words\n/autodelete – delete join/leave messages\n/admin – get administration\n/translate – translate\n\nඔබට ඔබේ  සමූහයේ  සිටින  ඇඩ්මින්වරුන් දැන ගැනීමට  /admin යනුවෙන් සමූහය තුල එවන්න",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💣 මුදල් බැලීමට", callback_data: "/ShowCDM pricesi" },
          { text: "භාශාව වෙනස් කිරීම🏞️ ", callback_data: "/ShowCDM langsi" }
        ],
        [
          { text: "🌐 ගෲප් සහායක", callback_data: "/ShowCDM managersi" },
          { text: "🎮 වෙනත් විධාන", callback_data: "/ShowCDM othersi" }
        ],
        [
          {
            text: "🚀 මාව සමූහයකට එක් කිරීමට 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}

if (name == "backsi") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "හෙලෝ》》" +
      user.first_name +
      " \n ↻මම @" +
      bot.name +
      " \n\n⚔️⚔️⚔️⚔️⚔️⚔️⚔️⚔️ ⚔️⚔️⚔️\n\nඋසස් ටෙලිග්‍රාම් සමූහ කළමනාකරණ බොට් කෙනෙකි\n ඔබේ කණ්ඩායම් කළමනාකරණය කිරීමට \n සහ ඔබේ කණ්ඩායම් ආරක්ෂා කිරීමට සහ ඔබේ සියලු අවශ්‍යතා සඳහා ",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💣 මුදල් බැලීමට", callback_data: "/ShowCDM pricesi" },
          { text: "භාශාව වෙනස් කිරීම🏞️ ", callback_data: "/ShowCDM langsi" }
        ],
        [
          { text: "🌐 ගෲප් සහායක", callback_data: "/ShowCDM managersi" },
          { text: "🎮 වෙනත් විධාන", callback_data: "/ShowCDM othersi" }
        ],
        [
          {
            text: "🚀 මාව සමූහයකට එක් කිරීමට 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}

if (name == "othersi") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "වෙනත් විධාන ⚡\n\n☟☟☟☟☟☟ \n \n⚡/tToVoice⇒》(වචනයක් කථනයක් කිරීමට  )\n⚡/movieDetail ⇒》(චිත්‍රපටි තොරතුරු ) \n /amazon ⇒》(amazon නිෂ්පාදන සෙවීමට)\n⚡/webapp ⇒》(විවෘත වෙබ් අඩවි) \n⚡/pin ⇒》(pin පණිවිඩ)\n⚡/carbon ⇒》(carbon image කිරීමට)\n⚡photo ⇒  》(ඔබේ මිතුරාගේ පැතිකඩ ඡායාරූප ලබා ගැනීමට \n⚡/weather ⇒》(කාලගුණ තොරතුරු ලබා ගැනීමට)\n⚡/ytthumb ⇒》(youtube  රූපය ලබා ගැනීමට)\n⚡/logo ⇒》(ලාංඡනය ජනනය කිරීමට)\n⚡/  covid ⇒》(covid-19 විස්තර ලබා ගැනීමට )\n⚡/getDetails ⇒》(පණිවිඩ විස්තර ඉදිරියට ලබා ගැනීමට )\n⚡/predict ⇒》( ♀️♂️ ස්ත්‍රී පුරුෂ භාවය පුරෝකථනය )\n⚡/lyrics ⇒scher(Ly)  \n⚡/calculater ⇒》(ගණනය කිරීමේ විකල්ප )\n⚡/spam ⇒》(Spamming Options)",

    reply_markup: {
      inline_keyboard: [
        [
          { text: "💣 මුදල් බැලීමට", callback_data: "/ShowCDM pricesi" },
          { text: "භාශාව වෙනස් කිරීම🏞️ ", callback_data: "/ShowCDM langsi" }
        ],
        [
          { text: "🌐 ගෲප් සහායක", callback_data: "/ShowCDM managersi" },
          { text: "🎮 වෙනත් විධාන", callback_data: "/ShowCDM othersi" }
        ],
        [
          {
            text: "🚀 මාව සමූහයකට එක් කිරීමට 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}
/////////////////////////////////////india hi//////////////////////////////



if (name == "hin") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "खैर, अब से मैं आपसे हिंदी 🇮🇳 में बात करूंगा ।",

    reply_markup: {
      inline_keyboard: [
        [
          { text: "💣पैसे देखने के लिए", callback_data: "/ShowCDM pricehi" },
          { text: "भाषा बदलना🏞️ ", callback_data: "/ShowCDM langhi" }
        ],
        [
          { text: "🌐समूह सहायक ", callback_data: "/ShowCDM managerhi" },
          { text: "🎮 अन्य आदेश", callback_data: "/ShowCDM otherhi" }
        ],
        [
          {
            text: "🚀 मुझे एक समूह में जोड़ें   🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}

if (name == "langhi") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "★᭄ꦿ᭄ꦿ    अपनी भाषा का चयन करें ★᭄ꦿ᭄ꦿ ",

    reply_markup: {
      inline_keyboard: [
        [
          { text: "🇱🇰සිංහල🇱🇰", callback_data: "/ShowCDM sin" },
          { text: "🇬🇧English🇬🇧", callback_data: "/ShowCDM back" }
        ],
        [
          { text: "🇮🇳हिन्दी🇮🇳", callback_data: "/ShowCDM hin" }],
        [{ text: "प्रस्थान🔙", callback_data: "/ShowCDM backhi" }],
        [
          {
            text: "🚀  मुझे एक समूह में जोड़ें  🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}

if (name == "pricehi") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "*Crypto पैसे के आदेश *\n\n/p – Check price of coin\n/price – Check price of coin\n/calculate – Convert coin price\n/clc – Convert coin price",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💣 पैसे देखने के लिए", callback_data: "/ShowCDM pricehi" },
          { text: "भाषा बदलना🏞️ ", callback_data: "/ShowCDM langhi" }
        ],
        [
          { text: "🌐समूह सहायक ", callback_data: "/ShowCDM managerhi" },
          { text: "🎮अन्य आदेश" , callback_data: "/ShowCDM otherhi" }
        ],
        [
          {
            text: "🚀 मुझे एक समूह में जोड़ें 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      ]
    },
    parse_mode: "markdown"
  })
  return
}
if (name == "managerhi") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "*समूह सहायक *\n\n/kick – kick user\n/ban – ban user\n/unban – unban user\n/mute – mute user\n/unmute – unmute user\n/warn – warn user\n/info – get info user\n/banwords – ban words\n/autodelete – delete join/leave messages\n/admin – get administration\n/translate – translate\n\nअपने ग्रुप के एडमिन को जानने के लिए ग्रुप में /admin भेजें",
    reply_markup: {
      inline_keyboard: [
              [
          { text: "💣 पैसे देखने के लिए", callback_data: "/ShowCDM pricehi" },
          { text: "भाषा बदलना🏞️ ", callback_data: "/ShowCDM langhi" }
        ],
        [
          { text: "🌐समूह सहायक ", callback_data: "/ShowCDM managerhi" },
          { text: "🎮अन्य आदेश" , callback_data: "/ShowCDM otherhi" }
        ],
        [
          {
            text: "🚀 मुझे एक समूह में जोड़ें 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      

      ]
    },
    parse_mode: "markdown"
  })
  return
}

if (name == "backhi") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "नमस्ते》》" +
      user.first_name +
      " \n ↻मैं हूँ @" +
      bot.name +
      " \n\n⚔️⚔️⚔️⚔️⚔️⚔️⚔️⚔️ ⚔️⚔️⚔️\n\nnएक उन्नत टेलीग्राम समूह प्रबंधन बॉट\n आपके समूहों को प्रबंधित करने के लिए \n और आपके समूहों की सुरक्षा और आपकी सभी जरूरतों के लिए ",
    reply_markup: {
      inline_keyboard: [
              [
          { text: "💣 पैसे देखने के लिए", callback_data: "/ShowCDM pricehi" },
          { text: "भाषा बदलना🏞️ ", callback_data: "/ShowCDM langhi" }
        ],
        [
          { text: "🌐समूह सहायक ", callback_data: "/ShowCDM managerhi" },
          { text: "🎮अन्य आदेश" , callback_data: "/ShowCDM otherhi" }
        ],
        [
          {
            text: "🚀 मुझे एक समूह में जोड़ें 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      
      ]
    },
    parse_mode: "markdown"
  })
  return
}

if (name == "otherhi") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "अन्य आदेश⚡\n\n☟☟☟☟☟☟ \n \n⚡/tToVoice⇒》(to turn text into voice  )\n⚡/movieDetail ⇒》(to get movie details )\n⚡/amazon ⇒》(to search amazon products)\n⚡/webapp ⇒》(open websites) \n⚡/pin ⇒》(pin messages)\n⚡/carbon ⇒》(to make carbon image)\n⚡photo ⇒》(to get your friend profile photos \n⚡/weather ⇒》(to get weather infomation)\n⚡/ytthumb ⇒》(to get youtube thumbnail)\n⚡/logo ⇒》(to generet logo)\n⚡/covid ⇒》(to get covid-19 details )\n⚡/getDetails ⇒》(to get forward message details  )\n⚡/predict ⇒》(  ♀️♂️ Gender Prediction )\n⚡/lyrics ⇒》(Lyrics Seacher )\n⚡/calculater ⇒》(Calculating Options )\n⚡/spam ⇒》(Spamming Options )",
    reply_markup: {
      inline_keyboard: [
      
                    [
          { text: "💣 पैसे देखने के लिए", callback_data: "/ShowCDM pricehi" },
          { text: "भाषा बदलना🏞️ ", callback_data: "/ShowCDM langhi" }
        ],
        [
          { text: "🌐समूह सहायक ", callback_data: "/ShowCDM managerhi" },
          { text: "🎮अन्य आदेश" , callback_data: "/ShowCDM otherhi" }
        ],
        [
          {
            text: "🚀 मुझे एक समूह में जोड़ें 🚀",
            url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
          }
        ]
      
      

      ]
    },
    parse_mode: "markdown"
  })
  return
}


