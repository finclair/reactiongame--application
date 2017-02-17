var startTime = new Date();

document.getElementById("circle").onclick = function() {
  var endTime = new Date();
  var timeTaken = (endTime - startTime) / 1000;
  var seconds = Math.round(timeTaken % 60)
  document.getElementById("timeShown").innerHTML = seconds + "s";
  startTime = endTime;
}




