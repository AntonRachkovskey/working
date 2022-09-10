const score = document.querySelector('.app__score');
const zero = document.querySelector('.app__zero');
const field = document.querySelector('.app__field');

const fieldHeight = field.getBoundingClientRect().height;
const fieldWidth = field.getBoundingClientRect().width;

function getRandomNumber (max) {
    return Matn.floor(Math.random()* max);
}

zero.addEventListener('mouseenter', () => {
    // zero.style.top = 
})