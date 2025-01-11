const exitBnt = document.querySelectorAll('.btn-exit');

const startBnt = document.querySelector('.btn-start');
const appearanceSection = document.querySelector('.appearance-section');
const boxesSection = document.querySelector('.boxes-section');

startBnt.onclick = () => {
    appearanceSection.classList.add('active');
    boxesSection.classList.add('active');
}

exitBnt.forEach(exitBnt => {
    exitBnt.onclick = () => {
        appearanceSection.classList.remove('active');
        boxesSection.classList.remove('active');
    }
});
