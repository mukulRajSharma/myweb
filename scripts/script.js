/*!
 * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */

// const buttons = document.querySelectorAll('.mode-toggle')

// buttons.forEach(button => {
//   button.addEventListener('click', function () {
//     document.body.classList.toggle('light-mode')
//     document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.toggle('fa-moon'))

//     if (document.body.classList.contains('light-mode')) {
//       localStorage.setItem('lightMode', 'enabled')
//     } else {
//       localStorage.setItem('lightMode', 'disabled')
//     }
//   })
// })

// if (localStorage.getItem('lightMode') === 'enabled') {
//   document.body.classList.add('light-mode')
//   document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.add('fa-moon'))
// }

// $(".flip-container .flipper").click(function () {
//   $(this).closest(".flip-container").toggleClass("hover");
//   $(this).css("transform, rotateY(180deg)");
// });
// localStorage.setItem("darkMode", "disabled")
function toggleTheme() {
  var element = document.body;
  localStorage.setItem("darkMode", (localStorage.getItem("darkMode") === "enabled") ? "disabled" : "enabled");
  document.getElementById("theme-check-box").checked = (localStorage.getItem("darkMode") === "enabled") ? true : false;
  element.classList.toggle("dark-mode");
  document.getElementById("theme-selector").src=(localStorage.getItem("darkMode") === "enabled") ? "/assets/icons/sun.svg" : "/assets/icons/moon.svg";
}

function checkLightMode() {
  console.log(localStorage.getItem("darkMode"));
  if (localStorage.getItem("darkMode") === "enabled") {
    console.log('check enable')
    document.getElementById("theme-check-box").checked = true
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("test").src="/assets/icons/sun.svg";
  } else {
    console.log('check disable')
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
