/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */

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
function sendMail (){
    var name = document.getElementById("name").value;
    var msg = document.getElementById("content").value;
    submitOk = true;
    if (name.length < 10) 
    {
        alert("enter name plzz.");
        submitOk=false;
    }
    if (msg.length < 10)
    {
        alert("c'mon at least 10 chars in the message.")
        submitOk=false;
    }
    if (submitOk == false)
        return false;
}
