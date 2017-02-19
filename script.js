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

document.getElementById("shape").onclick = function() {
  var endTime = new Date();
  var timeTaken = (endTime - startTime) / 1000;
  
  document.getElementById("timeShown").innerHTML = timeTaken + "s";
  startTime = endTime;

  var top = getRandomInt(0, 85);
  var left = getRandomInt(0, 85);
  var borderRadius = getRandomInt(0, 25);
  var background = getRandomColor();
  var width = getRandomInt(5, 200);
  var height = getRandomInt(5, 200);

  document.getElementById("shape").style.top = top + "%";
  document.getElementById("shape").style.left = left + "%";
  document.getElementById("shape").style.borderRadius = borderRadius + "px";
  document.getElementById("shape").style.background = background;
  document.getElementById("shape").style.height = height;
  document.getElementById("shape").style.width = width;
}




