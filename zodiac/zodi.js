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
const b = document.querySelectorAll('.b');

console.log(b);

b.forEach(button => {


    if (x=x) { };



    button.addEventListener('click', () => {
        des.hidden = !des.hidden;
    })
    // if (des.hidden != false) {
    //     button.addEventListener('mouseover', () => {
    //     hov.hidden = !hov.hidden;})
    // button.addEventListener('mouseout', () => {
    //     hov.hidden = !hov.hidden;})
    // }
})

function zodiac(cName, art, sound, name, date) { //job name, character art, sound
    this.cName = cName;
    this.art = art;
    this.sound = sound;
    this.name = name;
    this.date = date;
}
  
const info = new zodiac(document.getElementById('c_name').innerHTML, document.getElementById('picture'), 'N/A', document.getElementById('name').innerHTML, document.getElementById('date').innerHTML)

const alt = document.getElementById('picture').alt;



console.log(rdm);

console.log(alt);