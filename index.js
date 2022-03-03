// sticky navbar 
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

//sidebar mobile
let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');

});

// changing text effects
let typed = new Typed(".auto-input", {
    strings: ["DREAM", "APPLICATIONS", "WEBSITES"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

// smooth scroll library
let scroll = new SmoothScroll('a[href*="#"]',{
    speed: 800,
    speedAsDuration: true

});

//send email using smtpjs
//function sendEmail() {
   // Email.send({
   // SecureToken: "624596a8-5d9d-4180-8430-f19a591bf234",
   //  To : 'hana@cmtech.asia',
   //  From : document.getElementById("email").value,
   //  Subject : document.getElementById("subject").value,
   //  Body : "<br>" + document.getElementById("message").value
 //}).then(message => alert(message)
//);}