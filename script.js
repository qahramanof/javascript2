let email = 'admin@gmail.com';
let password = 'admin12345';

let result1 = document.getElementById('eml');
let result2 = document.getElementById('psw');
let btn = document.getElementById("btn")


btn.onclick = function () {
    if (result1.value === email && result2.value === password) {
        alert("duzdur")
    }
    else {
        alert("sehvdir")
    }
}



