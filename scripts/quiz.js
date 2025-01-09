const startBnt = document.querySelector('.start-btn');
const quizSection = document.querySelector('.quiz-section');
const home = document.querySelector('.home');

startBnt.onclick = () => {
    quizSection.classList.add('active');
    home.classList.add('active');
}
