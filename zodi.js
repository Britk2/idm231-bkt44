function off() {
    document.getElementById('welcome').hidden = true;
    document.getElementById('ex_job').removeAttribute('hidden');

    console.log('Help screen closed');
}
function on() {
    document.getElementById('welcome').removeAttribute('hidden');
    document.getElementById('ex_job').hidden = true;
    console.log('Help screen opened');
}