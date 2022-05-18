let nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
 let nav = document.querySelector('nav');
 nav.classList.toggle('sticky', window.scrollY > 0);
});

let typed = new Typed(".auto-input", {
    strings: ["DREAM", "APPLICATIONS", "WEBSITES"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

let scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarHeader'
});

// send Email
function sendEmail() {
    let fName = document.getElementById("name").value;
    let subjectLine = document.getElementById("subject").value;
    let body = document.getElementById("msg").value;
 
    window.location.href = "mailto:hadi@cmtech.asia,izad@cmtech.asia?subject="+subjectLine+"&body=Hello, I am "+fName+" "+"%0D%0A"+"%0D%0A"+body;
 }

