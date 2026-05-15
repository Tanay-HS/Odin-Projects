// console.log("hello World")

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)
    let choice = null
    switch(randomNumber){
        case 0: choice = "rock";
                break;

        case 1: choice = "paper";
                break;

        case 2: choice = "scissor";
                break;
    }
    return choice;
}

function getHumanChoice(){
    const message = `What is your choice?
    Rock , Paper or Scissor ?`
    const humanMessage = prompt(message);
    const choice = humanMessage.toLowerCase();
    return choice;
}


function playGame(){
    let humanScore = 0, computerScore = 0;
    
    function playRound(humanChoice , computerChoice){
        if(humanChoice === computerChoice){
            humanScore++;
            computerScore++;
            console.log("It is a tie");
        }
        else if((humanChoice === "rock" && computerChoice==="scissor")||(humanChoice==="paper" && computerChoice==="rock")||(humanChoice==="scissor" && computerChoice==="paper")){
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }
        else{
            computerScore++;
            console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
    }

    if(humanScore>computerScore){
        console.log("You win!!");
    }
    else console.log("You loose!!");
}

playGame();