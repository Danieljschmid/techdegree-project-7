
// Global variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;

const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const title = document.querySelector('.title');
const button = document.querySelector('.btn__reset');

const phraseUl = document.querySelector('#phrase ul');

const phrases = [
  'in a pickle',
  'jumping the gun',
  'cup of joe',
  'wake up call',
  'high and dry'
];

// adding event listener to start Game button to hide overlay
startGame.addEventListener('click', (e) => {
  overlay.style.display = 'none';
});

//Randomly Select a phrase from the phrases array and split characters
function getRandomPhraseArray(arr){
  let phrase = arr[Math.floor(Math.random()*arr.length)];
   let charArray = phrase.split('');
   return charArray;
}
//random phrase split array
const phraseSplit = getRandomPhraseArray(phrases);

//Set the game display
function addPhraseToDisplay(arr){
    for(let i = 0; i < arr.length; i++){
    let li = document.createElement('li');
    li.textContent = arr[i];
    phraseUl.appendChild(li);
    if (arr[i] != ' ') {
    li.classList.add('letter');
  } else {
    li.classList.add('space');
  }
 }
}
const phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);

// function to check if letter chosen is correct
function checkLetter(button) {
  const letters = document.querySelectorAll('.letter');
  let letterFound = null;
  for(let i = 0; i < letters.length; i++) {
    if (letters[i].textContent === button ) {
      letters[i].style.transition = 'all 2s';
      letters[i].classList.add('show');
      letterFound = true;
    }
  } return letterFound
}

//function to check to see if the player has won

function checkWin() {
  const show = document.querySelectorAll('.show');
  const letter = document.querySelectorAll('.letter');
  if (show.length === letter.length ) {
    overlay.className = 'win';
    overlay.style.display = 'flex';
    title.textContent = 'You Won!'
    button.textContent = 'restart';
  } else if (missed >= 5) {
    overlay.className = 'lose';
    overlay.style.display = 'flex';
    title.textContent = 'Sorry you lost!'
    button.textContent = 'restart';
   }
  }


//Add an event listener to the keyboard.
qwerty.addEventListener('click', (e) => {
  let target = e.target;
  const button = target.textContent;
  let guess = checkLetter(button);
  if (target.type === 'submit') {
    target.classList.add('chosen');
    target.setAttribute('disabled', '');


    //Count the missed guesses in the game.
    let letterFound = checkLetter(button);
    if (letterFound === null) {
    const heart = document.getElementsByTagName('img');
    for (let i = 0; i < heart.length; i++) {
      heart[missed].src = 'images/lostHeart.png';
      }
    missed += 1;
   }
  }
  checkWin();
});
















//