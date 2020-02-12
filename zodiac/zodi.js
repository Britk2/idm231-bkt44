

const welcome = document.getElementById('welcome');
const ex_box = document.getElementById('ex_box');
const calender = document.getElementById('calender');
const cl_but = document.getElementById('c_b');
const back = document.getElementById('back');

const help = document.querySelectorAll('.help');

help.forEach(button => {
    button.addEventListener('click', () => {
        welcome.hidden = !welcome.hidden;
        ex_box.hidden = !ex_box.hidden;
        calender.hidden = !calender.hidden;
    })
})


const hov = document.getElementById('hover');
const des = document.getElementById('mid');
const b = document.querySelectorAll('#c_b');

b.forEach(button => {
    button.addEventListener('click', () => {
        des.hidden = !des.hidden;
        // cl_but.hidden = !cl_but.hidden;
    })
    // button.addEventListener('hover', () => {
    //     hov.hidden = !hov.hidden;
    // })
})


