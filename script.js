let offset = 0; //Смещение от левого края
const sliderLine = document.querySelector(' .slider-line ');


document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 280; // offset += 280;
    if (offset > 840) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});


document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 280; // offset -= 280;
    if (offset < 0) {
        offset = 840;
    }
    sliderLine.style.left = -offset + 'px';
});



$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
})
