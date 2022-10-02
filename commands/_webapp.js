/*CMD
  command: /webapp
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send the link you want to open...

  <<KEYBOARD

  KEYBOARD
  aliases: /webapp@grouphelpmrbeebot
CMD*/

Api.sendMessage({
  text: "Your web app",
  reply_markup: { inline_keyboard: [
    [
      // open the any web page on button pressing
      { text: "◼️Open App▪️", web_app: { url: ""+message+"" } },
    ]
  ]}
});
