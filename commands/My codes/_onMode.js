/*CMD
  command: /onMode
  help: 
  need_reply: false
  auto_retry_time: 
  folder: My codes

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var movie = User.getProperty("movie")
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

Bot.sendMessage("*Searching movie: " + movie + " ....*")
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})

var c = JSON.parse(content)
var study = c.Poster
var t = c.Title
var y = c.Year
var r = c.Rated
var re = c.Released
var rt = c.Runtime
var im = c.imdbRating
var ac = c.Actors
var l = c.Language
var plot = c.Plot
var gen = c.Genre
var dir = c.Director
var wri = c.Writer
var coun = c.Country
var awar = c.Awards
var ratee = c.Ratings.Value
var metas = c.Metascore
var tpe = c.Type
var boxo = c.BoxOffice
var prod = c.Production
if (study == undefined) {
  Bot.sendMessage(
    "No results were found that included all of your search._Your search -  " +
      movie +
      " -  did not find any movie.*Suggestion:*🔘 Check that all words are spelled correctly.🔘 Try entering other keywords."
  )
} else {
  Api.sendPhoto({
    photo: study,
    caption:
      "*📽 Movie Details\n▪️Title:* " +
      t +
      "\n*▪️Year Runned:* " +
      y +
      "\n*▪️Rated By:* " +
      r +
      "\n*▪️Release Date:* " +
      re +
      "\n*▪️Runtime:* " +
      rt +
      "\n*▪️Genre: *" +
      gen +
      "\n*▪️Director: *" +
      dir +
      "\n*▪️Writer: *" +
      wri +
      "\n*▪️ Actors:* " +
      ac +
      "\n*▪️Plot:* " +
      plot +
      "\n*▪️Language:* " +
      l +
      "\n*▪️Country: * " +
      coun +
      "\n*▪️Awards: *" +
      awar +
      "\n*▪️Rate: *" +
      im +
      "\n/10*▪️MetaScore: *" +
      metas +
      "\n*▪️IMDB Rating:* " +
      im +
      "\n*▪️Type:* " +
      tpe +
      "\n*▪️BoxOffice: *" +
      boxo +
      "\n*▪️Production: *" +
      prod +
      "\n*▪️Logo: [* [Click Here](" +
      study +
      ") *]" +
      "\n\n☆ Deatails By : @" +
      bot.name +
      "*",
    parse_mode: "Markdown"
  })
}

