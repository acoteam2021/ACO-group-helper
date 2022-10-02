/*CMD
  command: /msginspect
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

var startMessage = `This option provides information about:
\n - received message;
- the user who sent the received message;
- the chat from which the message was received;
- and so on.

For example, to get the chat ID, forward a message from that chat to the bot. The ID of that chat you can find in <i>"forward_from_chat: id"</i>.

By default, only the most relevant information is displayed. If you need to see all the information, click on the <b>"Show source data"</b> button.

Developed by: Team Bee Family`
Api.sendMessage({
  text: startMessage,
  parse_mode: "HTML"
})

