const startBnt = document.querySelector('.start-btn');
const quizSection = document.querySelector('.quiz-section');

startBnt.onclick = () => {
    quizSection.classList.add('active');
}