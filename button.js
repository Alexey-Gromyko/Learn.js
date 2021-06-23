const learn = document.querySelector('.learn-js');
const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const toggle = document.querySelector('#toggle');
const getAttr = document.querySelector('#getAttr');
const setAttr = document.querySelector('#setAttr');


add.addEventListener('click', () => {
    learn.classList.add('bg');
})

remove.addEventListener('click', () => {
    learn.classList.remove('bg');
})

toggle.addEventListener('click', () => {
    learn.classList.toggle('bg');
})

getAttr.addEventListener('click', () => {
    getAttr.getAttribute('background');
})

setAttr.addEventListener('click', () => {
    setAttr.setAttribute("id", "add");
})

document.querySelector('#alertOnClick').onclick = function() {
    alert('Вы нажали на кнопку');
}

function triggerAlert() {
    document.getElementById('triggerText').innerHTML = 'Trigger alert';
}





const closestElement = document.querySelector('#closestEl');
closestElement.addEventListener('click', () => {
    console.log(closestEl.closest(".container"));
})


let massive = ['addClass', 'removeClass', 'toggleClass', 'getAttr', 'setAttr', 'alertOnClick', 'triggerAlert',
    'cloneThis', 'closestElement', 'findMe', 'fadeInText', 'fadeOutText', 'hideText', 'showText', 'dataAboutMe'];
const eachBtnText = document.querySelector('#eachBtnText');
eachBtnText.addEventListener('click', () => {
    console.log(massive);
})

const findMe = document.querySelector('#findMe');
findMe.addEventListener('click', () => {
    console.log(document.querySelector('#findMe'));
})


let elem = document.getElementById('inOutText'),
    fadeInInterval,
    fadeOutInterval;
document.getElementById('fadeIn').addEventListener('click', function () {
    clearInterval(fadeInInterval);
    clearInterval(fadeOutInterval);

    elem.fadeIn = function(timing) {
    let newValue = 0;

    elem.style.display = 'block';
    elem.style.opacity = 0;

fadeInInterval = setInterval(function(){ 

    if (newValue < 1) {
        newValue += 0.01;
    } else if (newValue === 1) {
    clearInterval(fadeInInterval);   
    }

    elem.style.opacity = newValue;

    }, timing);

}

    elem.fadeIn(10);
})

document.getElementById('fadeOut').addEventListener('click',function(){
    
    clearInterval(fadeInInterval);
    clearInterval(fadeOutInterval);

    elem.fadeOut = function(timing) {
    let newValue = 1;
    elem.style.opacity = 1;

    fadeOutInterval = setInterval(function(){ 

    if (newValue > 0) {
        newValue -= 0.01;
    } else if (newValue < 0) {
    elem.style.opacity = 0;
    elem.style.display = 'none';
    clearInterval(fadeOutInterval);
    }

    elem.style.opacity = newValue;

    }, timing);

}

    elem.fadeOut(10);
});




function hide() {
    document.getElementById('showHideText').style.display = "none";
}

function show() {
    document.getElementById('showHideText').style.display = "inline";
}




const dataAbout = document.querySelector('#dataAbout');
let inform = dataAbout.getBoundingClientRect();
dataAbout.addEventListener('click', () => {
    console.log(inform);
})