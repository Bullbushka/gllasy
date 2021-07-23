const feedback = document.querySelector(".contacts__button");
const backdrop = document.querySelector(".backdrop");
const modalFeedback = document.querySelector(".feedback");
const close = document.querySelector(".button-close");
const fio = modalFeedback.querySelector("[name=FIO]");

const slider = document.querySelector(".slider");
const slide1 = slider.querySelector("[value='1']");
const slide2 = slider.querySelector("[value='2']");
const slide3 = slider.querySelector("[value='3']");
const promo1 = document.querySelector(".promo");
const promo2 = document.querySelector(".promo_2");
const promo3 = document.querySelector(".promo_3");
const background = document.querySelector("body");

slide2.addEventListener("click", function(evt) {
    background.classList.add("js_slide2");
    background.classList.remove("js_slide1");
    background.classList.remove("js_slide3");
    promo2.classList.add("js_promo_show");
    promo1.classList.remove("js_promo_show");
    promo3.classList.remove("js_promo_show");

});

slide3.addEventListener("click", function(evt) {
    background.classList.add("js_slide3");
    background.classList.remove("js_slide1");
    background.classList.remove("js_slide2");
    promo3.classList.add("js_promo_show");
    promo2.classList.remove("js_promo_show");
    promo1.classList.remove("js_promo_show");
});

slide1.addEventListener("click", function(evt) {
    background.classList.add("js_slide1");
    background.classList.remove("js_slide2");
    background.classList.remove("js_slide3");
    promo1.classList.add("js_promo_show");
    promo2.classList.remove("js_promo_show");
    promo3.classList.remove("js_promo_show");
});

feedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    backdrop.classList.add("modal-show");
    modalFeedback.classList.add("modal-show", "modal-animation");
    fio.focus();
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    backdrop.classList.remove("modal-show");
    modalFeedback.classList.remove("modal-show");
});

backdrop.addEventListener("click", function(evt) {
    evt.preventDefault();
    backdrop.classList.remove("modal-show");
    modalFeedback.classList.remove("modal-show");
});

window.addEventListener("keyup", function(evt) {
    if (evt.code === "Escape") {
        evt.preventDefault;
        if (modalFeedback.classList.contains) {
            backdrop.classList.remove("modal-show");
            modalFeedback.classList.remove("modal-show");
        }
    }
})