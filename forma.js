
// Input
let frm = document.forms[0];
frm.firstname.onchange = function () {
    console.log(frm.firstname.value);
}

function keyHendler(event) {
    console.log(event.type);
}





// Radio
frm.manufacturer[0].onchange = function () {
    console.log("manufacturer 0:" + frm.manufacturer[0].checked);
}
frm.manufacturer[1].onchange = function () {
    console.log("manufacturer 1:" + frm.manufacturer[1].checked);
}
frm.manufacturer[2].onchange = function () {
    console.log("manufacturer 2:" + frm.manufacturer[2].checked);
}


//Checkbox
frm.home.onchange = function () {
    console.log("home:" + frm.home.checked);
}
frm.bar.onchange = function () {
    console.log("bar:" + frm.bar.checked);
}
frm.forest.onchange = function () {
    console.log("forest:" + frm.forest.checked);
}




// Input
frm.yourCountry.onchange = function () {
    console.log(frm.yourCountry.value);
}

// Select
frm.bodyAvto.onchange = function () {
    console.log(frm.bodyAvto.value);
}

//Radio
frm.avto[0].onchange = function () {
    console.log("avto 0:" + frm.avto[0].checked);
}
frm.avto[1].onchange = function () {
    console.log("avto 1:" + frm.avto[1].checked);
}
frm.avto[2].onchange = function () {
    console.log("avto 2:" + frm.avto[2].checked);
}
frm.avto[3].onchange = function () {
    console.log("avto 3:" + frm.avto[3].checked);
}

//Checkbox
frm.reliability.onchange = function () {
    console.log("reliability:" + frm.reliability.checked);
}
frm.appearance.onchange = function () {
    console.log("appearance:" + frm.appearance.checked);
}
frm.quality.onchange = function () {
    console.log("quality:" + frm.quality.checked);
}






// Radio
frm.prof[0].onchange = function () {
    console.log("prof 0:" + frm.prof[0].checked);
}
frm.prof[1].onchange = function () {
    console.log("prof 1:" + frm.prof[1].checked);
}
frm.prof[2].onchange = function () {
    console.log("prof 2:" + frm.prof[2].checked);
}

// Checkbox
frm.selery.onchange = function () {
    console.log("selery:" + frm.selery.checked);
}
frm.weekend.onchange = function () {
    console.log("weekend:" + frm.weekend.checked);
}
frm.vocation.onchange = function () {
    console.log("vocation:" + frm.vocation.checked);
}
frm.boss.onchange = function () {
    console.log("boss:" + frm.boss.checked);
}



const { form } = document.forms;

function retriveFormValue(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());


    console.log('>>', values);
}

form.addEventListener('submit', retriveFormValue);