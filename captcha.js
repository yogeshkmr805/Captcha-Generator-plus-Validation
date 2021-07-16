console.log("hi its working")
const alpha = 'ABCDEFghiJklMNOpqrsTUVWxyZabcefgh';
const num = '0123456789';
const special = '!@#$&';
let a = '';
for (let i = 0; i < 2; i++) {
    a += alpha.charAt(Math.floor(Math.random() * alpha.length));
}

let n = '';
for (let i = 0; i < 2; i++) {
    n += num.charAt(Math.floor(Math.random() * num.length));
}

let s = '';
for (let i = 0; i < 1; i++) {
    s += special.charAt(Math.floor(Math.random() * special.length));
}
console.log(a, n, s)
let spec = document.getElementById("spec");

spec.innerHTML = `<h1>${a+n+s}</h1>`;

let show = document.getElementById("show");

valid = () => {
    let inpt = document.getElementById("inpt");
    if (inpt.value == "") {
        show.innerHTML = `<h1 style = "color:blue;">Please Enter Captcha...</h1>`;
    } else {
        if (spec.innerText == inpt.value) {
            show.innerHTML = `<h1 style = "color:green;">Captcha Matched !!!</h1>`;
        } else {
            show.innerHTML = `<h1 style = "color:red;">Captcha Not Matched !!!</h1>`;
        }
    }
}