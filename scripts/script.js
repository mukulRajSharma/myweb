/*!
 * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */

function toggleTheme() {
  var element = document.body;
  localStorage.setItem("darkMode", (localStorage.getItem("darkMode") === "enabled") ? "disabled" : "enabled");
  document.getElementById("theme-check-box").checked = (localStorage.getItem("darkMode") === "enabled") ? true : false;
  element.classList.toggle("dark-mode");
  document.getElementById("theme-selector").src=(localStorage.getItem("darkMode") === "enabled") ? "/assets/icons/sun.svg" : "/assets/icons/moon.svg";
}

function checkLightMode() {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.getElementById("theme-check-box").checked = true
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("test").src="/assets/icons/sun.svg";
  } else {
    localStorage.setItem("darkMode", "disabled");
    document.getElementById("theme-selector").src="/assets/icons/moon.svg";
  }
}

function flipCard() {
  var element = document.body;
  element.classList.toggle("card-container:active");
}
function validateForm() {
  fetch("https://api.ipify.org/?format=json")
    .then((results) => results.json())
    .then((data) => (sIp = data.ip))
    .then(() => console.log(sIp));

  var subject = document.forms["cForm"]["subject"].value;
  subject = subject.replace(/\s+/g, "");
  var msg = document.forms["cForm"]["text"].value;
  var alphaRegex = /^[A-Za-z]+$/;
  var urlRegex =
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
  if (!subject.match(alphaRegex)) {
    alert("Subject field can only have alphabets! Refresh and try again.");
    return false;
  }
  if (msg.match(urlRegex) != null) {
    alert("No links allowed! Refresh and try again.");
    return false;
  }
}
