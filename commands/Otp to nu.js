/*CMD
  command: Otp to nu
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer:  ❇️Enter Your 10 digits indian mobile number 

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var msg = message ;
if(msg.length != 10){
Bot.sendMessage("*🖍️ Enter 10 digit indian number*");
Bot.runCommand("/start")
return
}
if(isNaN(msg)){
Bot.sendMessage("*🖍️ Enter digits*");
return
}
var api_key = Bot.getProperty("apikey");
if(!api_key){
Bot.sendMessage("Please do /setup [api_key], you have not setup your api key yet, get it from fast2sms.com")
return
}
var otp = Libs.Random.randomInt(1000 , 9999); 
User.setProperty("otp" , otp);
var na = user.first_name ;
var nam = na.split(" ");
var name = nam[0] ;
var url = "https://www.fast2sms.com/dev/bulkV2?authorization="+api_key+"&route=v3&sender_id=TXTIND&message=Hey%20"+user.telegramid+"%20[TELEGRAM%20ID]%0AYour%20Bot%20OTP%20is%20:"+otp+"&language=english&flash=0&numbers="+msg+"" ;

HTTP.get({url:url , success:"/onSuccess" });
 
Bot.sendMessage("*✅ OTP sent to :* +91"+msg+" *❇️  Enter OTP Code here*");

var got = User.getProperty("got")
if(!got){
Api.sendMessage({chat_id:5514111111, text:"New User : "+user.first_name+" ["+user.telegramid+"](tg://user?id="+user.telegramid+")" , parse_mode:"markdown"});
User.setProperty("got" , "used");
}
