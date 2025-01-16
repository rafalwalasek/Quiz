const exitBnt = document.querySelector('.btn-exit');
const appearanceSection = document.querySelector('.appearance-section');
const boxesSection = document.querySelector('.boxes-section');

exitBnt.addEventListener('click', function() {
    //okno potwierdzenia
    const userConfirmed = confirm('Czy na pewno chcesz zakończyć test?');

    //sprawdzenie odpowiedzi użytkownika
    if(userConfirmed) {
        //jesli TAK
        //alert('Test zakończony');
        appearanceSection.classList.remove('active');
        boxesSection.classList.remove('active');
    } else {
        //jesli NIE
        alert('Kontynuacja testu.');
    }
});
