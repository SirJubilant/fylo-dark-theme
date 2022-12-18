//animations
const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.header, .hero', {delay:600, reset: false})
sr.reveal ('.hero__img', {delay:600, origin: 'right'});

sr.reveal('.card', {delay:500, origin: 'left'} );
sr.reveal('.productive', {delay:500, origin: 'top'} );

sr.reveal('.testimonial', {delay:400, origin: 'top'} );
sr.reveal('.subscription', {delay:500, origin: 'bottom'} );




//Form validation
const form = document.querySelector("form");
const emailInput = document.querySelector(".subscription__content-input");
const error = document.querySelector(".subscription__error");
const submitButton = document.querySelector(".subscription__content-cta");


function checkEmail(email) {
    const check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return check.test(email);
}

function toggleError(element) {
    if (!checkEmail(element.value)){
        error.classList.add("subscription__error--active");

    }else{
        error.classList.remove("subscription__error--active");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    toggleError(emailInput);
});