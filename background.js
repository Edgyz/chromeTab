
// var nIntervId;
// function updateDate() {
//     nIntervId = setInterval(fetchDate(), 100);
//   console.log("fetched");
// }


function fetchDate() {
  console.log("updating time");
  var d = new Date();
  var strHours = document.getElementById("currenttime");
  var h = d.getHours();
  var m = d.getMinutes();

  //adding a zero for 00, 01 etc
  if (m.toString().length == 1){
    m = "0"+m;
    }

strHours.innerHTML = h.toString().concat(":",m.toString());
sayHi(h,m);
}

function sayHi(hours,minutes) {
  var salutations = document.getElementById("salut");
  var name ="<span class=\"semibold\"> Inès</span>";
  if(hours == 12){
    salutations.innerHTML = "Bon appétit "+name+"!";
  } else if (hours == 16) {
      salutations.innerHTML = "C'est l'heure du goûter !";
  }else if (hours == 17) {
      salutations.innerHTML = "C'est l'heure du goûter !";
  }else if (hours == 18) {
      salutations.innerHTML = "C'est l'heure du goûter !";
  }else if (hours == 19) {
      salutations.innerHTML = "Working late, "+name+"?";
  }else {
      var randomSalutations=["Salut babychouchou!","Hello babychouchou!", "おはようございます babychouchou!","Wie geht's babychouchou ?"];
      var randomSalutation = randomSalutations[Math.floor(randomSalutations.length * Math.random())];

      console.log(randomSalutation);
      salutations.innerHTML = randomSalutation.replace("babychouchou",name);
  }}

function getStarted() {
fetchDate();
setInterval(fetchDate, 30000);

document.getElementById('currenttask').addEventListener('input', saysomething);

 }

function saysomething(){

  console.log("wheteveresr");
}




 function makeEditable(elementidname){
  var attribStatus = document.getElementById(elementidname).setAttribute('contenteditable',"true");
    console.log("edited");
    document.getElementById(elementidname).addEventListener("onfocusout", makeUNEditable(elementidname));

 }
 function makeUNEditable(elementidname){
   console.log("unedited");

 }



 document.addEventListener("DOMContentLoaded", function(event) {
     getStarted();

   });
