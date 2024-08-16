console.log("Hello World");
console.log(Math.floor(Math.random()*3));
//0: rock, 1: scissors, 2: paper
let result = document.createElement("span");
let finalResult = document.createElement("div");
let numOfIter = 0;
const resultContainer = document.querySelector("#result");
let hScore = 0;
let cScore = 0;

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
                result = "Tie!";
                numOfIter++;
                return "T";
            }
            else if(computerChoice == 1)
            {
                console.log("You Win! Rock Beats Scissors");
                result = "You Win! Rock Beats Scissors";
                hScore++;
                numOfIter++;
                return "H";
               
            }
            else
            {
                console.log("You Lose! Paper Beats Rock");
                result = "You Lose! Paper Beats Rock";
                cScore++;
                numOfIter++;
                return "C";
            }
        }

        else if(humanChoice == 1)
        {
            if(computerChoice == 0)
            {
                console.log("You Lose! Rock Beats Scissors");
                result = "You Lose! Rock Beats Scissors";
                cScore++;
                numOfIter++;
                return "C";
               
            }    
            else if(computerChoice == humanChoice)
            {
                console.log("Tie!");
                result = "Tie!";
                numOfIter++;
                return "T";
            }
            else
            {
                console.log("You Win! Scissors Beats Paper");
                result = "You Win! Scissors Beats Paper";
                hScore++;
                numOfIter++;
                return "H";
            }
        }

        else if(humanChoice == 2)
        {    
            if(computerChoice == 0)
            {
                console.log("You Win! Paper Beats Rock");
                result = "You Win! Paper Beats Rock";
                hScore++;
                numOfIter++;
                return "H";
               
            }
            else if(computerChoice == 1)
            {
                console.log("You Lose! Scissors Beats Paper");
                result = "You Lose! Scissors Beats Paper";
                cScore++;
                numOfIter++;
                
                return "C";
             
            }
            else
            {
                console.log("Tie!")
                result = "Tie!";
                numOfIter++;
                return "T";
            }
        }

}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const container = document.querySelector("#container");



container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

rock.addEventListener('click', () =>{
    playRound(0);
    
    console.log(result);
    resultContainer.append(result);
    result = ` (You: ${hScore} Computer: ${cScore}) | `;
    resultContainer.append(result);

    if(numOfIter == 5)
    {
        if(hScore > cScore)
        {
            finalResult.textContent = "You are the winner!";
            finalResult.setAttribute("style", "color: green");
           
            const fRContainer = document.querySelector("#finalResult");
            fRContainer.append(finalResult);
        }
        else if(cScore > hScore)
        {
            finalResult.textContent = "You Lose! Good Day Sir!";
            finalResult.setAttribute("style", "color: red");
            
            const fRContainer = document.querySelector("#finalResult");
            fRContainer.append(finalResult);
        }
        else
        {
            finalResult.setAttribute("style", "color: blue");
            finalResult.textContent = "It's a tie?????????";
            const fRContainer = document.querySelector("#finalResult");
            fRContainer.append(finalResult);
        }
    }

    
});

scissors.addEventListener('click', ()=>{
    playRound(1);
    resultContainer.append(result);
    result = ` (You: ${hScore} Computer: ${cScore}) | `;
    resultContainer.append(result);

});

paper.addEventListener('click', ()=>{
    playRound(2);
    resultContainer.append(result);
    result = ` (You: ${hScore} Computer: ${cScore}) | `;
    resultContainer.append(result);
})





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


