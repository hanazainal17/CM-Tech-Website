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

// send Email
function sendEmail() {
   let fName = document.getElementById("firstName").value;
   let lName = document.getElementById("lastName").value;
   let subjectLine = document.getElementById("subject").value;
   let body = document.getElementById("message").value;

   window.location.href = "mailto:hana@cmtech.asia?subject="+subjectLine+"&body=Hello, I am "+fName+" "+lName+"%0D%0A"+"%0D%0A"+body;

}
