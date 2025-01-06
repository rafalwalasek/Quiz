const startTime = 1;
let time = startTime * 60;

const countElement = document.getElementById('countdown');

setInterval(countdown, 1000);

function countdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
 
    countElement.innerHTML = `${minutes}:${seconds}`;

    if(time <= 0) {
        countElement.innerHTML = 'Czas upłynął, wynik: 0 / 20';
        clearInterval(intervalId);
    }

    time--;
}