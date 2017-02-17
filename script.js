var startTime = new Date();

document.getElementById("circle").onclick = function() {
  var endTime = new Date();
  var timeTaken = (endTime - startTime) / 1000;
  var seconds = Math.round(timeTaken % 60)

  document.getElementById("timeShown").innerHTML = seconds + "s";
  console.log(seconds);
  
 
}


//when user clicks the item the clock starts from zero again

//täytyy ottaa talteen aika kun kuviota klikataan
//tämän jälkeen tulee 

//jos käyttäjä painaa ajassa 14:15:20
//ja painaa tämän jälkeen ajassa 14:15:28
//niin erotus on 8 sekuntia

