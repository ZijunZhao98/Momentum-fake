function getT(){
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  if(hour < 12 && hour > 4){
     msg =  "Good morning.";
  }else if(hour < 18){
     msg = "Good afternoon.";
  }else{
     msg = "Good evening."
  }

  document.getElementById("time").innerHTML = hour + ":" + minute;
  document.getElementById("salutation").innerHTML = msg;
};

window.onload = function(){
  getT();
  setInterval(getT(), 30000);
};
