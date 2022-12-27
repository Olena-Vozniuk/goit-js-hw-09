const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;
let intervalId = null;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', makeColorOnBody);
stopBtn.addEventListener('click', stopColorOnBody);

stopBtn.disabled = true;

function makeColorOnBody() {
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
   }, 1000);
    
    startBtn.disabled = true;
    stopBtn.disabled = false;
};

function stopColorOnBody() {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
};

startBtn.style.cursor = 'pointer';
stopBtn.style.cursor = 'pointer';
startBtn.style.marginLeft = '50%';