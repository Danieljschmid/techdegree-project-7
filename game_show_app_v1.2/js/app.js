
// Global variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;

const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');

const phraseUl = document.querySelector('#phrase ul');

const phrases = [
  'In a Pickle',
  'Jumping the Gun',
  'Cup Of Joe',
  'Wake Up Call',
  'High And Dry'
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
    li.innerhtml = arr[i];
    phraseUl.appendChild(li);
    if (arr[i] != ' ') {
    li.classList.add('letter');
  }
 }
}
const phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);

function checkLetter(button) {
  const letters = document.querySelectorAll('.letter');
  let letterFound = true;
  for(let i = 0; i < letters.length; i++) {
    if (letters[i].textContent.toLowerCase() === button ) {
      letters[i].classList.add('show');
    } else {
      return letterFound = null;
    }
  }
}

qwerty.addEventListener('click', (e) => {
  let target = e.target;
  const button = target.textContent;
  let guess = checkLetter(button);
  if (target.type === 'submit') {
    target.classList.add('chosen');
    target.setAttribute('disabled', '');
  } else {
    return;
  }
});













//
