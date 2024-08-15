console.log("Hello World");
console.log(Math.floor(Math.random()*3));
//0: rock, 1: scissors, 2: paper


function getComputerChoice() {
    return Math.floor(Math.random()*3);
}

function getHumanChoice() {
    var choice = '';
    var breakout = false;
    do
    {
        choice = prompt("Enter your choice: Rock, Paper, or Scissors?");
        choice = choice.toLowerCase();
        if(choice === "rock" || choice === "paper" || choice === "scissors")
        {
            breakout = true;
        }
    }
    while(!breakout);
    
    switch(choice){
        case("rock"): return 0;
        case("scissors"): return 1;
        case("paper"): return 2;
    }

}

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
    console.log(humanChoice);
    console.log(computerChoice);
  
        if(humanChoice == 0)
        {
            if(computerChoice == humanChoice)
            {
                console.log("Tie!");
                return "T";
            }
            else if(computerChoice == 1)
            {
                console.log("You Win! Rock Beats Scissors");
                return "H";
               
            }
            else
            {
                console.log("You Lose! Paper Beats Rock");
                return "C";
            }
        }

        else if(humanChoice == 1)
        {
            if(computerChoice == 0)
            {
                console.log("You Lose! Rock Beats Scissors");
                return "C";
               
            }    
            else if(computerChoice == humanChoice)
            {
                console.log("Tie!");
                return "T";
            }
            else
            {
                console.log("You Win! Scissors Beats Paper");
                return "H";
            }
        }

        else if(humanChoice == 2)
        {    
            if(computerChoice == 0)
            {
                console.log("You Win! Paper Beats Rock");
                return "H";
               
            }
            else if(computerChoice == 1)
            {
                console.log("You Lose! Scissors Beats Paper");
                return "C";
             
            }
            else
            {
                console.log("Tie!")
                return "T";
            }
        }

}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
    
    let winner = playRound();
    
    if(winner == "H")
    {
        humanScore++;
    }
    else if(winner == "C")
    {
        computerScore++;
    }
    console.log("Human Score: "+humanScore+"\nComputer Score: "+computerScore);
    
    if(humanScore > computerScore)
    {
        console.log("You Win! Congrats!")
    }
    else
    {
        console.log("You Lost! Try Again!");
    }

}

console.log(playGame());