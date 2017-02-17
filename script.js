var startTime = new Date();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("circle").onclick = function() {
  var endTime = new Date();
  var timeTaken = (endTime - startTime) / 1000;
  var seconds = Math.round(timeTaken % 60)
  document.getElementById("timeShown").innerHTML = seconds + "s";
  startTime = endTime;

  var top = getRandomInt(0, 85);
  var left = getRandomInt(0, 85);
  var borderRadius = getRandomInt(0, 25);
  var background = getRandomColor();
  var width = getRandomInt(5, 200);
  var height = getRandomInt(5, 200);

  document.getElementById("circle").style.top = top + "%";
  document.getElementById("circle").style.left = left + "%";
  document.getElementById("circle").style.borderRadius = borderRadius + "px";
  document.getElementById("circle").style.background = background;
  document.getElementById("circle").style.height = height;
  document.getElementById("circle").style.width = width;
}




