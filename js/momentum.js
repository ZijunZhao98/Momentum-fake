function getT(){
  console.log("inside get t");
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  document.getElementById("time").innerHtml = hour + ":" + minute;
};

window.onload = function(){
  console.log("inside here");
  setInterval(getT(), 30000);
  console.log("I am up");
};
