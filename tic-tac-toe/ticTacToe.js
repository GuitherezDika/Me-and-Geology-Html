function startGame(){

   for(var i=1; i<=9; i++){
      clearBox(i);
   }

   document.turn = 'X'; 
   if(Math.random() < 0.6){
      document.turn = 'O';
   }

   document.winner = null;
   changeText(document.turn+ ' gets to start!')
}

function changeText(msg){
   document.getElementById('message').innerText=msg;
} 

function changeTableData(input){
   if(document.winner !== null){
      changeText(document.winner+' already won the game.')
   } 
   
   else if(input.innerText == ""){
      input.innerText = document.turn;
      changeInput()
   } 
   
   else {
      return changeText("it's already been filled!");
   }
}

function changeInput( ) {
   if (checkTheWinner(document.turn)){
      document.winner = document.turn;
      return changeText('Congratulation '+document.turn+ '. You Win!');
   } 
   
   else if(document.turn =="X"){
      document.turn = 'O';
      return changeText("it's "+document.turn+"'s turn!")
   }
   
   else {
      document.turn = 'X';
      return changeText("it's "+document.turn+"'s turn!")
   }

}


function checkRow(a,b,c,move){
   let result = false;
   if(callNewId(a) === move && callNewId(b) === move && callNewId(c) === move){
      result = true
   }
   return result; 
}

function callNewId(number){
   return document.getElementById('s'+number).innerText;
}

function checkTheWinner(move){
   let result=false;
   if(checkRow(1,2,3, move) ||
      checkRow(4,5,6, move) ||
      checkRow(7,8,9, move) ||
      checkRow(1,4,7, move) ||
      checkRow(2,5,8, move) ||
      checkRow(3,6,9, move) ||
      checkRow(1,5,9, move) ||
      checkRow(3,5,7, move)
   ) {result = true;};
   return result;
}

function clearBox(number){
   document.getElementById('s'+ number).innerText = '';
}
