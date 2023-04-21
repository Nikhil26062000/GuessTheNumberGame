// making an empty array
let array = [];
let autoNumber=0;

//fetching id = desc
let progress = document.getElementById('desc');


//Making a function which will generate a Random number
const computerGeneratedNumber = () => {
    autoNumber = Math.floor(Math.random() *100);
    console.log(autoNumber);
}


//Making init function which will run automatically after screen load
const init = () => {
    //Disabling the Game Area section
    document.getElementById('game-Area').style.display = 'none';
    computerGeneratedNumber();
}


//Making a function named easyButton
const easyButton = () => {

    //On selecting difficulty mode  intro-view  and new game button will be disabled

    document.getElementById('intro-view').style.display="none";
    document.getElementById('btn-new-game').style.display="none";

    // Enabling Game Area 
    document.getElementById('game-Area').style.display="grid";
    maxGuess=10;
    let sNumber = document.getElementById('spanNumber');
   sNumber.innerHTML = `${maxGuess-array.length}`;


}

const hardButton = (times) => {
    document.getElementById('intro-view').style.display="none";
    document.getElementById('btn-new-game').style.display="none";

    document.getElementById('game-Area').style.display="grid";
    maxGuess=5;
    let sNumber = document.getElementById('spanNumber');
   sNumber.innerHTML = `${maxGuess-array.length}`;
    

}



//currInput fuinction
const currInput = () => {

    
    //Assigning the value in array
   

   let inputNumber = Number(document.getElementById('input-field').value);
   array = [...array,inputNumber];

   if(array.length<maxGuess){
   if(inputNumber > autoNumber ){
       progress.innerHTML = `Oops  🔥 buddy you have gussed larger number`;
       console.log("Greater");
   }else if(inputNumber < autoNumber){
       progress.innerHTML = `Oops 👎buddy you have gussed smaller number`;
       console.log("Smaller");
   }else{
        progress.innerHTML = `WOWW 😄 You WON`;
       setTimeout(restart,2000);
   }
}else{
    document.getElementById('input-field').setAttribute('disabled',true);
    progress.innerHTML =`You Loss the Game:`+'😢';
    document.getElementById('btn-new-game').style.display="inline";
}


   //Fectching id = gusses and assigning the correct value
   let guess = document.getElementById('guesses');
   guess.innerHTML = `Previous attempts are 🥇${array}`;

   //fetching total number of attempt section
   let spNumber = document.getElementById('spanNumber');
   spNumber.innerHTML = `${maxGuess-array.length}`;

   

    
}

const restart = () => {
    document.getElementById('intro-view').style.display="grid";
    document.getElementById('btn-new-game').style.display="none";
    document.getElementById('input-field').removeAttribute('disabled');
    array = [];
    init();
    
   //fetching total number of attempt section
   let spNumber = document.getElementById('spanNumber');
   spNumber.innerHTML = `${maxGuess-array.length}`;

    
     //Fectching id = gusses and assigning the correct value
   let guess = document.getElementById('guesses');
   guess.innerHTML = `Previous attempts are 🥇${array}`;

   progress.innerHTML="";
   document.getElementById('input-field').value="";



}

