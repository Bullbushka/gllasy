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


const login = document.querySelector(".login");
const modalLogin = login.querySelector(".login__form");
const buttonLogin = login.querySelector(".login__button");
const search = document.querySelector(".search");
const modalSearch = search.querySelector(".search .search__form");
const buttonSearch = search.querySelector(".search .search__button");

function dropdown(clickedElement, elementToShow, legalElement) {
    clickedElement.addEventListener("click", function(evt) {
        evt.preventDefault();
        elementToShow.classList.toggle("js_show");
        clickedElement.classList.toggle("js_hover");
    });

    document.body.addEventListener("click", function(evt) {
        if (!legalElement.contains(evt.target)) {
            elementToShow.classList.remove("js_show");
            clickedElement.classList.remove("js_hover");
        }
    })
}

dropdown(buttonLogin, modalLogin, login);
dropdown(buttonSearch, modalSearch, search);


const feedback = document.querySelector(".contacts__button");
const backdrop = document.querySelector(".backdrop");
const modalFeedback = document.querySelector(".feedback");
const closeButton = document.querySelector(".button-close");
const fio = modalFeedback.querySelector("[name=FIO]");

function closeModal(closeElement) {
    closeElement.addEventListener("click", function(evt) {
        evt.preventDefault();
        backdrop.classList.remove("modal-show");
        modalFeedback.classList.remove("modal-show");
    });
}

feedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    backdrop.classList.add("modal-show");
    modalFeedback.classList.add("modal-show", "modal-animation");
    fio.focus();
});

closeModal(closeButton);
closeModal(backdrop);

window.addEventListener("keyup", function(evt) {
    if (evt.code === "Escape") {
        evt.preventDefault;
        if (modalFeedback.classList.contains) {
            backdrop.classList.remove("modal-show");
            modalFeedback.classList.remove("modal-show");
        }
    }
})