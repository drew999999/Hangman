var playersLetter = document.getElementById("input");
var hint =  document.getElementById("hintbox");
// var hangman = document.getElementById("hangman");
var guessLetters = document.getElementById("guessLetters");
var letters = document.getElementsByClassName('letters');
var gameNames = ["batman","joker", "bane"];
var tips = ["hint: alfred","hint: purple","hint: masked man"]
var word = Math.floor(Math.random() * gameNames.length);
var currentWord = gameNames[word];
var clue = tips[word];
var displayBox= document.getElementById("displayBox");
var chosenWord = currentWord.split('');
var playerChances = 10;
var puzzleLife = chosenWord.length;
var win = "you win";
var lose = "lose";
var playersLetter = document.getElementById('insert');
var submit = document.getElementById('submit');
var hiddenLetters = document.createElement('div');
hiddenLetters.setAttribute('class', 'dashes');
var hintbox = document.getElementById('hintbox');


guessLetters.innerHTML = clue;

for (var i = 0; i < chosenWord.length; i++) {
    var hiddenLetters = document.createElement('div')
   hiddenLetters.setAttribute('class', 'dashes')
   hiddenLetters.style.height = '35px';
   hiddenLetters.style.width = '35px';
   hiddenLetters.style.borderBottom = 'solid black';
   hiddenLetters.style.display = 'inline-block';
   hiddenLetters.style.marginLeft = '15px';
   hiddenLetters.style.marginRight = '23px';
   hiddenLetters.style.textAlign = 'center';
   hiddenLetters.style.borderColor = 'red';
   displayBox.appendChild(hiddenLetters);
}


  submit.addEventListener('click', function(){
  hintbox.innerHTML += playersLetter.value + ' '


  for(i=0; i<chosenWord.length; i++){

    if(playersLetter.value == (chosenWord[i])){
      var answerLetter = document.getElementsByClassName('dashes')[i]
      answerLetter.innerHTML = playersLetter.value
      puzzleLife--
     }
    if(puzzleLife == 0){
      alert('you win');
     }

  }

  function scoreLetter(value){
    return (chosenWord.indexOf(value) === -1) ? false : true
  }

  if(scoreLetter(playersLetter.value)== false){
    playerChances--
    alert("Wrong letter. You have " + playerChances + ' ' + 'lives left')
  }
   if(playerChances <= 0){
    alert('you lose');
  }


})
function playAgain() {


 window.location.reload();
}
