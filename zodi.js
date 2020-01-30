function wellOff() {
    document.getElementById('welcome').hidden = true;
    document.getElementById('ex_job').removeAttribute('hidden');
    document.getElementById('calender').removeAttribute('hidden');
    console.log('Help screen closed');
}
function helpOn() {
    document.getElementById('welcome').removeAttribute('hidden');
    document.getElementById('ex_job').hidden = true;
    document.getElementById('calender').hidden = true;
    console.log('Help screen opened');
}