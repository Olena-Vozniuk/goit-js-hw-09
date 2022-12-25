const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', makeColorOnBody);
stopBtn.addEventListener('click', stopColorOnBody);

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
    body.style.backgroundColor = '';
};
