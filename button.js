


$('#add').on('click', function () {
    $('.learn-js').addClass('bg');
})


$('#remove').on('click', function () {
    $('.learn-js').removeClass('bg');
})

$('#toggle').on('click', function () {
    $('.learn-js').toggleClass('bg');
})

$('#getAttr').on('click', function () {
    console.log(this.getAttribute('class'));
})


$('#setAttr').on('click', function () {
    this.setAttribute("style", "font-size: 40px")
})

$('#alertOnClick').on('click', function () {
    alert("Вы нажали на кнопку")
})

$('#triggerAlert').on('click', function () {
    $('#alertOnClick').trigger('click');
})

$('#clone').on('click', function () {
    new_clone = $('#clone').first().clone();
    $('.container').append(new_clone);
})


let closestEl = $('#closestEl');
$('#closestEl').on('click', function () {
    console.log(closestEl.closest("div"));
})


let arr = $('button');
$('#eachBtnText').on('click', function () {
    console.log(arr);
})


let find = $('body').find('#findMe')
$('#findMe').on('click', function () {
    console.log(find);
})

$('#fadeIn').on('click', function () {
    $('#inText').fadeIn("slow");
})

$('#fadeOut').on('click', function () {
    $('#outText').fadeOut("slow");
})


$('#hide').on('click', function () {
    $('#hideText').hide();
})

$('#show').on('click', function () {
    $('#showText').show();
})


/*const dataAbout = $('#dataAbout');
let inform = dataAbout.getBoundingClientRect();
dataAbout.on('click', function () {
    console.log(inform);
})*/










const dataAbout = document.querySelector('#dataAbout');
let inform = dataAbout.getBoundingClientRect();
dataAbout.addEventListener('click', () => {
    console.log(inform);
})