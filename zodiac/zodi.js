function wellOff() {
    document.getElementById('welcome').hidden = true;
    document.getElementById('ex_box').removeAttribute('hidden');
    document.getElementById('calender').removeAttribute('hidden');
    console.log('Help screen closed');
}
function helpOn() {
    document.getElementById('welcome').removeAttribute('hidden');
    document.getElementById('ex_box').hidden = true;
    document.getElementById('calender').hidden = true;
    document.getElementById('des').hidden = true;
    document.getElementById('info').hidden=true;
    console.log('Help screen opened');
}

function infoOn() {
    document.getElementById('info').removeAttribute('hidden');
    document.getElementById('des').removeAttribute('hidden');
    console.log('Info Revealed');
}

function hover() {
    document.getElementById('hover').removeAttribute('hidden');
}

function blank() {
    document.getElementById('hover').hidden = true;
 }

