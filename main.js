const GAME_TIME = 3;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let checkInterval;
let words = []; // 단어 리스트 전역 변수 선언

const $wordInput = document.querySelector('.word-input');
const $wordDisplay = document.querySelector('.word-display');
const $scoreDisplay = document.querySelector('.score');
const $timeDisplay = document.querySelector('.time');
const $button = document.querySelector('.button');

init();
function init() {
  getWords();
  $wordInput.addEventListener('input', checkMatch);
  $wordInput.disabled = true; // 처음에는 입력 비활성화
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    buttonChange('게임종료 ...');
    clearInterval(checkInterval);
    $wordInput.disabled = true; // 게임이 끝나면 입력 비활성화
  }
}

function getWords() {
  words = ['Hello', 'Banana', 'Apple', 'Cherry'];
  buttonChange('게임시작');
}

// 단어 일치 체크
function checkMatch() {
  if ($wordInput.value.toLowerCase() === $wordDisplay.innerText.toLowerCase()) {
    $wordInput.value = '';
    if (!isPlaying) {
      return;
    }
    score++;
    $scoreDisplay.innerText = score;
    time = GAME_TIME;

    const randomIndex = Math.floor(Math.random() * words.length);
    $wordDisplay.innerText = words[randomIndex]; // 단어 변경
  }
}

// 게임 실행
function run() {
  if (isPlaying) {
    return;
  }
  isPlaying = true;
  time = GAME_TIME;
  $wordInput.focus();
  $wordInput.disabled = false; // 입력 활성화
  score = 0;
  $scoreDisplay.innerText = score;
  $timeDisplay.innerText = time;

  timeInterval = setInterval(countDown, 1000);
  checkInterval = setInterval(checkStatus, 50);
  buttonChange('게임중');
}

function countDown() {
  time > 0 ? time-- : (isPlaying = false);
  if (!isPlaying) {
    clearInterval(timeInterval);
  }
  $timeDisplay.innerText = time;
}

function buttonChange(text) {
  $button.innerText = text;
  text === '게임시작'
    ? $button.classList.remove('loading')
    : $button.classList.add('loading');
}
