
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


 function saveMainTask(){
    // Get a value saved in a form.
    var theValue =  document.getElementById('currenttask').value;
    // Check that there's some code there.
    if (!theValue) {
      message('Error: No value specified');
      return;
    }
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({'maintask': theValue});

    console.log("task saved");
    chrome.storage.sync.get('maintask', function(items) {
       if (!chrome.runtime.error) {
         console.log();
       }
     });
     }




///// Once content is loaded....


 document.addEventListener("DOMContentLoaded", function(event) {
     getStarted();

   });

   ///// ...we launch the timer (clock) and EventListener for the textarea...


   function getStarted() {
   fetchDate();
   setInterval(fetchDate, 30000);
   var mainTaskObj =  document.getElementById('currenttask');

   /// check storage
   chrome.storage.sync.get("maintask", function(items) {
      if (!chrome.runtime.error) {
        mainTaskObj.value = items.maintask;

      }
    });

   mainTaskObj.addEventListener('input', saveMainTask);
    }

    //// just a quick way to check stuff
    function saysomething(){
      console.log("wheteveresr");
    }
