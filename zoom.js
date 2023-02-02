 //    Author: Navjot Singh
 //    Date:   2022-02-22
 // Student Id : 301157391


 "use strict"; // interpret document contents in JavaScript strict mode

 /* global variables */
 var photoOrderArray = window.opener.photoOrder;
 var figFilename = "images/IMG_0" + photoOrderArray[2] + "sm.jpg";
 
 /* populate img element and create event listener */
 function pageSetup() {
    document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
    window.opener.navjotFavSrc = figFilename;
    createEventListener();
 }
 function closeWin() {      
    window.close();
 }

 /*function navjotFavorites(){
   window.opener.testFavorites();
 }*/

 function createEventListener() {
     var closeWindowDiv =
     document.getElementsByTagName("p")[0];
     if (closeWindowDiv.addEventListener) {
     closeWindowDiv.addEventListener("click", closeWin,
     false); 
     } else if (closeWindowDiv.attachEvent) {
     closeWindowDiv.attachEvent("onclick", closeWin);
    }
   
  }

 /* add img src value and create event listener when page finishes loading */
 window.onload = pageSetup;