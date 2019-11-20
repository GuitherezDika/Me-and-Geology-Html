let userScore = 0;
let computerScore = 0;
const littleF_div = document.getElementById('l');
const indexF_div = document.getElementById('i');
const thumbF_div = document.getElementById('t');
const result_p = document.querySelector('.result > p');
let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('score-board');

function getComputerChoice(){
   const choiceArray = ['l','i','t'];
   const getChoice = Math.floor(Math.random() * 3);
   return choiceArray[getChoice];
}

function convertToWord(letter){
   if(letter === 'l') return 'little_finger';
   if(letter === 'i') return 'index_finger';
   return 'thumb_finger';
}

function lose(userChoice,computerChoice){
   const smallUserWord = 'user'.fontsize(3).sub();
   const smallCompWord = 'comp'.fontsize(3).sub();
   computerScore++;
   computerScore_span.innerHTML = computerScore;
   userScore_span.innerHTML = userScore;
   // result_div.innerHTML = userChoice +' loses to'  +computerChoice +'. You lost!';
   result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} . You lost!`;
}

function win(userChoice, computerChoice){
   const smallUserWord = 'user'.fontsize(3).sub();
   const smallCompWord = 'comp'.fontsize(3).sub();
   userScore++;
   computerScore_span.innerHTML = computerScore;
   userScore_span.innerHTML = userScore;
   // result_div = userChoice +' beats '+ computerChoice +'. You win!';
   result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . You win!`;
}

function draw(userChoice, computerChoice){
   const smallUserWord = 'user'.fontsize(3).sub();
   const smallCompWord = 'comp'.fontsize(3).sub();
   // result_div.innerHTML = userChoice +' equals '+ computerChoice +'. it is a draw';
   result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} . It is a draw!`;
}

function game(userChoice){
   const computerChoice = getComputerChoice();
   switch(userChoice + computerChoice){
      case 'li':
      case 'tl':
      case 'it':
         lose(userChoice, computerChoice);
         break;

      case 'il':
      case 'lt':
      case "ti":
         win(userChoice, computerChoice);
         break;

      case 'll':
      case 'ii':
      case 'tt':
         draw(userChoice, computerChoice);
      }
}

function main() {
   littleF_div.addEventListener('click', function(){
      game('l')
   });
   indexF_div.addEventListener('click', function(){
      game('i')
   });
   thumbF_div.addEventListener('click', function(){
      game('t')
   });
}
main();