import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const timerEl = document.querySelector('.timer');
let timerIntervalId = null;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] > new Date()) {
          startBtn.disabled = false;
      }
      else {
          Notiflix.Notify.failure('Please choose a date in the future');
      }   
  },
};

flatpickr(inputEl, options);


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};


function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}


startBtn.addEventListener('click', onStartTimer);

function onStartTimer() {
    updateTimer();
    timerIntervalId = setInterval(updateTimer, 1000);
    startBtn.disabled = true;
};

function updateTimer() {
    const timesValue = new Date(inputEl.value) - new Date();
    const calculatedTime = convertMs(timesValue);

    days.textContent = addLeadingZero(calculatedTime.days);
    hours.textContent  = addLeadingZero(calculatedTime.hours);
    minutes.textContent = addLeadingZero(calculatedTime.minutes);
    seconds.textContent = addLeadingZero(calculatedTime.seconds);
    
    if (calculatedTime.days <= 0 && calculatedTime.hours <= 0 && calculatedTime.minutes <= 0 && calculatedTime.seconds <= 0) {
        Notiflix.Notify.success('Yes! Your time has come!');
        clearInterval(timerIntervalId);
        return;
    }
};


timerEl.style.fontFamily = 'Comic Sans MS';
timerEl.style.fontSize = '32px';
timerEl.style.display = 'flex';
timerEl.style.justifyContent = 'space-between';
inputEl.style.textAlign = 'center';
document.body.style.backgroundColor = 'beige';
startBtn.style.cursor = 'pointer';