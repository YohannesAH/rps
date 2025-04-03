/*
 Blueprint
 ------------------
Plan
-------
1. Run the program
2. The program loads with a minimal GUI
3. The user clicks a button of his choice to play the game(Rock, Paper or Scissor)
4. The computer randomly generate either of the three values (Rock, Paper or Scissors)
5. The game logic decides who will be the winner
6. Display the winner of the game
7. Program ends

Pseudocode
-----------
1. A path to the JS file will be made on the HTML boilerplate <source src="rps.js" defer>
            on JS file
            -----------
2. Three buttons will be created iteratively with unique ID's
3. Question : Can I access buttons inside a function that are created outside the function - yes.
4. A function called getHumanChoice will return the ID of the clicked button
5. A function called getComputerCoice will return the randomly selected value
6. A third function playRound take the those two functions as an arguments and apply the logic to find the winner
             The logic is 
            --------------
   * Rock always beats scissors
   * Paper always beats rock
   * scissors always beats paper
   * Same values comes its a draw
   * 
7. A fourth function decideWinner will display the winner of the game

Divide and conquer
-------------------
1. Create an HTML boilerplate and provide the JS path
   On the JS file
   ---------------------
2. Create a div container
3. Create three buttons iteratively, add them to the class and append them to the container
4. Declare a function named humanChoice () {} 
5. Create event listener and return the ID of the clicked button
6. Declare a second function called computerChoice () {} 
7. Return one of the three randomly selected values using Math.floor(Math.random())
8. A third function playRound takes humanChoice and computerChoice as an arguments and finds the winner with conditional statement
9. A winner function finds and displays the winner


     let humanChoice = parseInt(button.id);







*/