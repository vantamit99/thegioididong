var page = document.querySelector('.page');
var loading = document.querySelector('.loading');
var isBlock = false;
var hidden = document.querySelector('.hidden');
var more = document.querySelector('.more');
var changeText = document.querySelector('.more a');
var bars = document.querySelector('.btn__bars');
var close = document.querySelector('.close');
var mobileMenu = document.querySelector('.mobile__menu');

window.onload = function () {
    // load page //
    page.style.display = "block";
    loading.style.display = "none";
    // carousel //
    $(document).ready(function () {
        $('.owl-carousel-page').owlCarousel({
            loop: true,
            nav: true,
            items: 1
        });
    });

    // product hot weekend //
    $('.owl-carousel-proHotWeekend').owlCarousel({
        loop: true,
        nav: true,
        margin: 20,        
        responsive: {
            0:{
                items:1,               
            },
            450: {
                items: 1,                         
            },
            600: {
                items: 2,
            },
            850: {
                items: 3,
            },
            968:{
                items:4,               
            },
            1000:{
                items:5,              
            }
        }
    });

    more.addEventListener('click', ()=> {
        onMore();
    });
    bars.addEventListener('click', activeShow);
    close.addEventListener('click', activeHide);
};
function onMore() {
    if(isBlock) {
        hidden.style.display = "none";
        changeText.innerHTML = "Xem Thêm";
        isBlock = !isBlock;
    } else {
        hidden.style.display = "block";
        changeText.innerHTML = "Thu Gọn";
        isBlock = !isBlock;
    }
}
function activeShow() {
    mobileMenu.classList.add('active__mobile--menu');
    bars.style.display = "none";
}
function activeHide() {
    mobileMenu.classList.remove('active__mobile--menu');
    bars.style.display = "block";
}