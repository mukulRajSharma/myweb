/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */

const { data } = require("jquery");

$('.flip-container .flipper').click(function() {
    $(this).closest('.flip-container').toggleClass('hover');
    // $(this).css('transform, rotateY(180deg)');
});

function lightMode (){
    var element = document.body;
    element.classList.toggle("light-mode");
}
function flipCard(){
    var element = document.body;
    element.classList.toggle("card-container:active");
}
function validateForm (){

    fetch('https://api.ipify.org/?format=json')
    .then(results => { document.forms["cForm"]["extra_ip"].value=toString(results.json()) });
    
    var subject = document.forms["cForm"]["subject"].value;
    var msg = document.forms["cForm"]["text"].value;
    var alphaRegex = /^[A-Za-z]+$/;
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    if (!subject.match(alphaRegex)){
        alert("Subject field can only have alphabets! Refresh and try again.");
        return false;
    }
    if (msg.match(urlRegex) != null) {
        alert("No links allowed! Refresh and try again.");
        return false;
    }

}
