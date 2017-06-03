
// var nIntervId;
// function updateDate() {
//     nIntervId = setInterval(fetchDate(), 100);
//   console.log("fetched");
// }



////// MAIN FUNCTIONS



/// TIME & SALUTATIONS

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



/// STORAGE
 function saveMainTask(){
    // Get a value saved in a form.
    var MainTaskValue =  document.getElementById('currenttask').value;
    var TaskInputs = document.getElementsByTagName('input');
    var TaskListValues = {};
    for (var i = 0; i < TaskInputs.length; i++) {
      TaskListValues[i] = TaskInputs[i].value;
    }

    // Check that there's some code there.
    if (!MainTaskValue) {
      message('Error: No value specified in Main Task');
      return;
    }

    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({'maintask': MainTaskValue});
    chrome.storage.sync.set({'tasklist': TaskListValues});

    console.log("tasks saved");
    chrome.storage.sync.get('maintask', function(items) {
       if (!chrome.runtime.error) {
         console.log();
       }
     });

     chrome.storage.sync.get('tasklist', function(items) {
        if (!chrome.runtime.error) {
          console.log();
        }
      });
     }


function checkStorage() {



   /// check storage & get data (main task)
   chrome.storage.sync.get("maintask", function(items) {
      if (!chrome.runtime.error) {
        document.getElementById("currenttask").value = items.maintask;

      }
    });
    /// check storage & get data (TaskList)
    chrome.storage.sync.get("tasklist", function(items) {
       if (!chrome.runtime.error) {
          document.getElementById("taskListTable").value = items.tasklist;
          console.log(items.tasklist);
          document.getElementById("upnext").appendChild(createTable(items.tasklist));

                       var inputArray = document.getElementsByTagName("input");

                       for (var i = 0; i < Object.keys(inputArray).length; i++) {
                        document.getElementsByTagName("input")[i].addEventListener("input", saveMainTask);
                       }

       }
     });
}
////// Get Started

 function getStarted() {

     ///// ...launch the timer (clock) & an interval for the next update
     fetchDate();
     setInterval(fetchDate, 30000);
     console.log("Date fetched, timer set.");

      checkStorage();
      console.log("Storage checked.");

        document.getElementById("currenttask").addEventListener('input', saveMainTask);
        document.getElementById("addTaskBtn").addEventListener('click', addaTask);
        console.log("SOME listeners added.");

  }

function addaTask(){

  var latestTR = document.getElementById("taskListTable").getElementsByTagName("tr")[document.getElementById("taskListTable").getElementsByTagName("tr").length-1];


var cln = latestTR.cloneNode(true);
cln.lastElementChild.lastElementChild.setAttribute("value"," new task");
latestTR.parentElement.insertBefore(cln,latestTR.nextSibling);

}

function createTable(array){

  console.log(Object.keys(array).length);
  var taskTable = document.createElement("table");
  taskTable.setAttribute("id","taskListTable");
  var defaultRow = "<tr><td><i class=\"fa fa-square\"></i></td><td class=\"task\"><input  class=\"tasklist\" type=\"text\" value=\"VALUE-TO-REPLACE\" /></td></tr>";

    for (var i = 0; i < Object.keys(array).length; i++) {
      taskTable.innerHTML+= defaultRow.replace("VALUE-TO-REPLACE",array[i]);
      console.log(array[i]);

console.log(taskTable);
  }
  console.log(taskTable);
  return taskTable;
}




///// Once content is loaded....


 document.addEventListener("DOMContentLoaded", function(event) {
     getStarted();
     console.log("We're getting started.");


   });
