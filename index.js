const score = document.querySelector('.app__score');
const zero = document.querySelector('.app__zero');
const field = document.querySelector('.app__field');

const fieldHeight = field.getBoundingClientRect().height;
const fieldWidth = field.getBoundingClientRect().width;

let scoreCounter = 0;

function getRandomNumber (max) {
    let randomNumber = Math.floor(Math.random() * max);
    if (randomNumber > max - 70){
        return randomNumber - 70
    } else {
        return randomNumber
    }
}

zero.addEventListener('mouseenter', () => {
    setTimeout(() => {
        zero.style.top = `${getRandomNumber(fieldHeight)}px`;
        zero.style.left = `${getRandomNumber(fieldWidth)}px`;
        zero.style.transform = 'none';
    }, 150)   
})

zero.addEventListener('click', () => {
    field.style.backgroundColor = 'red';
    setTimeout(() => {
        field.style.backgroundColor = 'black'
    }, 100)
    scoreCounter++
    score.textContent = scoreCounter;
})