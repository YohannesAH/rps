
          // GUI
   const div = document.createElement("div")
   div.id = "container"
   const h1 = document.createElement("h1");
   h1.textContent = "Well come to Rock Paper Scissors Game"
   h1.style.cssText = "color:green;";
   const h2 = document.createElement("h2");
   h2.textContent = "Click on your favorite";
   h2.style.cssText = "color:red";
   div.appendChild(h1);
   div.appendChild(h2);
   document.body.appendChild(div);
   
   //Global variables 
  
   let humanChoice;
   let humanChoice2;
   let computerpick;
   let humanScoreCounter = 0;
   let computerScoreCounter = 0;
   const maxRounds = 5;
   let round  = 0 ;

   // A function creating three buttons with unique ID
    function threeButtons() {
   
        const button1 = document.createElement("button");
        button1.id = "1";
        button1.style.margin = "10px"
        button1.textContent = "Rock";
        div.appendChild(button1);
        
    const button2 = document.createElement("button");
    button2.id = "2";
    button2.style.margin = "10px"
    button2.textContent = "Paper";
    div.appendChild(button2);

    const button3 = document.createElement("button");
    button3.id = "3";
    button3.textContent = "Scissors";
    button3.style.margin = "10px"
    div.appendChild(button3);

   return {button1,button2,button3};
   }
   
    threeButtons();

    // Obtaining a human choice
    function getHumanChoice() {
        const button = document.querySelectorAll("button");
        button.forEach((button) => {
            button.addEventListener("click", () => {
         // adding a round to play five times
                if (round < maxRounds) {
                    humanChoice = parseInt(button.id);
    
                    // humanChoice2 = humanChoice === 1? "Rock":
                    //                humanChoice === 2? "Paper":
                    //                "Scissors";
                    const humanChoice2 = {1: "Rock", 2: "Paper", 3: "Scissors"};
                    alert("You clicked: " + humanChoice2[humanChoice]);
                    
                    const computerRandom = generateComputerRandom();      
                    findWinner(humanChoice,computerRandom);              
                    round++; // Increment the round
                }
                if (round === maxRounds) {
                    decideWinner(humanScoreCounter, computerScoreCounter);
                }
            });
        });
    }
    

  getHumanChoice();
 // Get Computer value
    function generateComputerRandom() {
        
        randomValue = (Math.floor(Math.random() * 3) + 1);
        // The code below was original but its some sort of cluttered 
        // computerpick = randomValue === 1?"Rock":
        //                 randomValue === 2?"Paper":
        //                 "Scissors";

        // alert("Computer generated "+computerpick);
    const choices = { 1: "Rock", 2: "Paper", 3: "Scissors" };
    
    alert(`Computer chose: ${choices[randomValue]}`);
        return randomValue;
        }      
    // The logic to find the winner of the game

    function findWinner(humanChoice,computerRandom) {
        if (
            (humanChoice === 1 && computerRandom === 3) ||
            (humanChoice === 2 && computerRandom === 1) ||
            (humanChoice === 3 && computerRandom === 2)
        ){
        alert("human Wins");  
        humanScoreCounter ++;
        }
        else if(humanChoice === computerRandom){
        alert("its a draw");
        }
        else {
        alert("Computer wins")
       computerScoreCounter ++;
        }}

    function decideWinner(humanScoreCounter, computerScoreCounter) {
        if(humanScoreCounter > computerScoreCounter){
            alert("Humans are decissive winners")
        }
        else if (computerScoreCounter > humanScoreCounter) {
            alert(" its a tie")
        }
        else {
            alert("Computer is decissive winner");
        }
    }
    
    





















    




    
