/*CMD
  command: /fakecredit
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Fake Credit Card

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

HTTP.get({
  url: "https://cvcbnhfuu.ml/HMD/api/Random.php",
  success: "/ccgenData",
  error: "onError_1"
})
