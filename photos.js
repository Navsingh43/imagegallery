// Author: Navjot Singh
// Date: 22-02-2022
// Student Id: 301157391

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
var figureCount = 3;
var navsan= document.getElementsByTagName("img")[1];
var navjotNewDiv = document.getElementById("NavjotNewDiv");
var navjotFavSrc = "";
var favlimit=0;

function populateFigures() {
  var filename;
  var currentFigNavjot;
  if (figureCount === 3)  {
    for (var i = 1; i < 4; i++) {
    filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
    currentFigNavjot = document.getElementsByTagName("img")[i-1];
  currentFigNavjot.src = filename;
  }
  }
  else
  {
  for (var i = 0; i < 5; i++) {
    filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
    currentFigNavjot = document.getElementsByTagName("img")[i];
    currentFigNavjot.src = filename;
    }
 }
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrowNavjot() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrowNavjot() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}
function FiveNavjot() {
   var articleElNavjot = document.getElementsByTagName("article")[0];
   var lastFigure = document.createElement("figure");
   lastFigure.id = "fig5";
  lastFigure.style.zIndex = "5";
  lastFigure.style.position = "absolute";
  lastFigure.style.right = "45px";
  lastFigure.style.top = "67px";
  var lastImage = document.createElement("img");
    lastImage.width = "240";
    lastImage.height = "135";
     lastFigure.appendChild(lastImage);
     // articleEl.appendChild(lastFigure);
    articleElNavjot.insertBefore(lastFigure,
   document.getElementById("rightarrow"));
    var firstFigure = lastFigure.cloneNode(true);
   firstFigure.id = "fig1";
   firstFigure.style.right = "";
   firstFigure.style.left = "45px";
   // articleEl.appendChild(firstFigure);
   articleElNavjot.insertBefore(firstFigure,
   document.getElementById("fig2"));
   figureCount = 5;
   document.getElementsByTagName("img")[0].src = "images/IMG_0"
  + photoOrder[0] + "sm.jpg";
  document.getElementsByTagName("img")[4].src = "images/IMG_0"
  + photoOrder[4] + "sm.jpg";
  var numberButton = document.querySelector("#fiveButton p");
  numberButton.innerHTML = "Show fewer images";
  if (numberButton.addEventListener) {
  numberButton.removeEventListener("click", FiveNavjot,
  false);
  numberButton.addEventListener("click", ThreeNavjot,
  false);
  } else if (numberButton.attachEvent) {
   numberButton.detachEvent("onclick", FiveNavjot);
   numberButton.attachEvent("onclick", ThreeNavjot);
   }
  }
function ThreeNavjot() {
    var articleElNavjot =
    document.getElementsByTagName("article")[0];
    var numberButton = document.querySelector("#fiveButton p");
    articleElNavjot.removeChild(document.getElementById("fig1"));
articleElNavjot.removeChild(document.getElementById("fig5"));
figureCount = 3;
  numberButton.innerHTML = "Show more images";
  if (numberButton.addEventListener) {
  numberButton.removeEventListener("click", ThreeNavjot,
  false);
  numberButton.addEventListener("click", FiveNavjot, false);
  } else if (numberButton.attachEvent) {
  numberButton.detachEvent("onclick", ThreeNavjot);
  numberButton.attachEvent("onclick", FiveNavjot);
 }
    }

/* open center figure in separate window */
function zoomFig() {
   var WidthNavjot = 960;
  var HeightNavjot = 600;
  var LeftNavjot = ((screen.width - WidthNavjot) / 2);
  var TopNavjot = ((screen.height - HeightNavjot) / 2);
  var OptionsNavjot = "width=960,height=600,";
  OptionsNavjot += ",left=" + LeftNavjot;
  OptionsNavjot += ",top=" + TopNavjot;
 var zoomWindow = window.open("zoom.htm", "zoomwin", OptionsNavjot);
 zoomWindow.focus();
 }
function createEventListeners() {
   var leftarrow = document.getElementById("leftarrow");
   if (leftarrow.addEventListener) {
       leftarrow.addEventListener("click", leftArrowNavjot, false); 
       } else if (leftarrow.attachEvent) {
       leftarrow.attachEvent("onclick", leftArrowNavjot);
       }
       var rightarrow = document.getElementById("rightarrow");
  if (rightarrow.addEventListener) {
  rightarrow.addEventListener("click", rightArrowNavjot, false); 
  } else if (rightarrow.attachEvent) {
  rightarrow.attachEvent("onclick", rightArrowNavjot);
  }
  var mainFigNav = document.getElementsByTagName("img")[1];
  if (mainFigNav.addEventListener) {
    mainFigNav.addEventListener("click", zoomFig, false); 
    } else if (mainFigNav.attachEvent) {
    mainFigNav.attachEvent("onclick", zoomFig);
    }
    var showAllButton = document.querySelector("#fiveButton p");
 if (showAllButton.addEventListener) {
 showAllButton.addEventListener("click", FiveNavjot,
 false);
 } else if (showAllButton.attachEvent) {
 showAllButton.attachEvent("onclick", FiveNavjot);
 }
    }
    
//testing to call a function from one file to another

function testFavorites(){
   console.log("testing if the function is working");   
   var navjotImg = document.createElement("img");   
   navjotImg.setAttribute("src", navjotFavSrc);
   navjotImg.setAttribute("height", "80");
   navjotImg.style.margin="5px";
   if(favlimit<5){
   navjotNewDiv.appendChild(navjotImg);
   favlimit++;
}
   else {
       document.getElementById("removemsgNavjot").innerHTML= "Maximum limit is five. You have to delete at least one picture first using this button. &nbsp;";
       document.createElement('br');
       let crtButton= document.createElement('BUTTON');
       var txtNavjot= document.createTextNode("Remove Image");
       crtButton.setAttribute('id', "removeImageNavjot");
       crtButton.appendChild(txtNavjot);
       document.getElementById("removemsgNavjot").appendChild(crtButton);
   document.getElementById("removeImageNavjot").addEventListener("click", 
   function removeImageNavjot(){
    document.getElementsByTagName('img')[5].remove();
    favlimit--;
   }
   )
   }
   console.log(navjotImg);
}
/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}