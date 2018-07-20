/* 
   Revisions Bookstore and Cafe 
   Filename: script.js

   Author:   Keith Teo Hong Wei
   Date:     16 July 2018
   HTML5 and CSS3 Illustrated Unit M, Visual Workshop
 */

var smallbutton = document.querySelector(".smaller-size");
var mediumbutton = document.querySelector(".medium-size");
var largebutton = document.querySelector(".larger-size");
var selected = document.querySelector(".selected-button");
var reset = document.querySelector(".reset-button");
var body = document.querySelector("body");

function smallersize() {
  body.className = "smaller-size";
  smallbutton.className = "selected-button";
  mediumbutton.className = "medium-size";
  largebutton.className = "larger-size";
}
function mediumsize() {
  body.className = "medium-size";
  mediumbutton.className = "selected-button";
  smallbutton.className = "smaller-size";
  largebutton.className = "larger-size";
}
function largesize() {
  body.className = "larger-size";
  largebutton.className = "selected-button";
  smallbutton.className = "smaller-size";
  mediumbutton.className = "medium-size";
}

smallbutton.addEventListener("click", smallersize);
mediumbutton.addEventListener("click", mediumsize);
largebutton.addEventListener("click", largesize);