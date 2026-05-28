const human = document.querySelector(".human");
const comp = document.querySelector(".comp");
const mes = document.querySelector(".message");

// Fixed: Changed selector from '.content' to '.score' so we can update the numbers
const scoreContainer = document.querySelector(".score"); 
const end = document.querySelector("footer");
const buttons = document.querySelector(".buttons");

let humanScore = 0, computerScore = 0;

// Main Click Controller
buttons.addEventListener('click', (e) => {
    // 1. Only run if a button was clicked (Fixed: UPPERCASE 'BUTTON')
    if (e.target.tagName === 'BUTTON') {
        
        // 2. Grab the human choice and turn it into lowercase ("rock", "paper", "scissor")
        const humanChoice = e.target.textContent.toLowerCase();
        
        // 3. Generate the computer's choice
        const computerChoice = getComputerChoice();
        
        // 4. Show the selections on the screen
        display(humanChoice, computerChoice);
        
        // 5. Run the round logic (Fixed: properly closed parenthesis)
        playRound(humanChoice, computerChoice);
    }
});

end.addEventListener('click', gamend);

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    let choice = null;
    switch(randomNumber){
        case 0: choice = "rock"; break;
        case 1: choice = "paper"; break;
        case 2: choice = "scissor"; break;
    }
    return choice;
}

function display(humanChoice, compChoice){
    human.textContent = `${humanChoice}`;
    comp.textContent = `${compChoice}`;
}

function playRound(humanChoice, computerChoice){
    let message = "";
    
    if(humanChoice === computerChoice){
        // A tie usually doesn't give a point to both, but keeping your rules!
        humanScore++;
        computerScore++;
        message = "It is a tie";
    }
    else if((humanChoice === "rock" && computerChoice === "scissor") || 
            (humanChoice === "paper" && computerChoice === "rock") || 
            (humanChoice === "scissor" && computerChoice === "paper")){
        humanScore++;
        message = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else{
        computerScore++;
        message = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    // Update messages
    mes.textContent = message;
    
    // Update the numbers inside the correct .score container
    scoreContainer.children[0].textContent = `${humanScore}`;
    scoreContainer.children[1].textContent = `${computerScore}`;
}

function gamend(){
    let message = "";
    if(humanScore > computerScore){
        message = "You won the match!!";
    }
    else if(humanScore === computerScore){
        message = "The match is a Tie!!";
    }
    else {
        message = "You Lost the match!!";
    }
    mes.textContent = message;
}