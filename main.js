var gmail;


function refresh(f) {
  if( (/in/.test(document.readyState)) || (typeof Gmail === undefined) ) {
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}


var main = function(){
  gmail = new Gmail();
  console.log("Hello Employer, please take a look at here. Then you will find emails visible here.");
  console.log(gmail.get.visible_emails());
}


refresh(main);
