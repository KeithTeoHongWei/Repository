/*
    Keith's Peronsal Website
    Filename: script.js
    Author:   Keith Teo Hong Wei
 */
var formData = location.search;
formData = formData.substring(1, formData.length);
while (formData.indexOf("+") !== -1) {
    formData = formData.replace("+", " ");
}
formData = decodeURIComponent(formData);
var formArray = formData.split("&");
for (var i = 0; i < formArray.length; i = i + 1) {
    document.write("<p>" + formArray[i] + "</p>");
}

function validateForm() {
    var x = document.forms["myForm"]["Phone number"].value;
    if (isNaN(x) || x < 80000000 || x > 99999999) {
        alert("Please enter your real details!");
        return false;
    }
    else return true;
}

window.onscroll = function () { scroll() };

var navbar = document.querySelector(".sitenavigation");
var sticky = navbar.offsetTop;

function scroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function menu() {
    var x = document.querySelector("nav")
    if (x.className === "sitenavigation") {
        x.className += " navresponsive";
    } else {
        x.className = "sitenavigation";
    }
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2500);
}