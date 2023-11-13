const results = document.querySelector('.results');

var playerPoints = 0;
var computerPoints = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>button.addEventListener("click", () => playRound(button.innerText)))

function game(){
    /* playerPoints = 0
    computerPoints = 0
    while(playerPoints < 3 && computerPoints < 3){
        console.log(playRound(prompt("Rock, paper, or scissors?")))
    }
    if(playerPoints == 3){
        console.log(`Player wins!`)
    }
    else{
        console.log(`Computer wins!`)
    } */
}

function choiceToInt(input){
    //sanitize player input

    let choice = input.toLowerCase()
    switch(choice){
        case 'rock':
            choice = 0
            break
        case 'paper':
            choice = 1
            break
        case 'scissors':
            choice = 2
            break
    }
    return choice;
}
var tries = 0;
function playRound(playerInput){
    
    if(playerPoints >= 5 || computerPoints >= 5){return;}
    const choiceArr = ['rock', 'paper', 'scissors']
    let playerChoice = choiceToInt(playerInput);
    let computerChoice = getComputerChoice()
    //check against computer
    if(playerChoice == computerChoice){
        updateResults( `Draw! ${capitalizeFirst(choiceArr[playerChoice])} ties!`);
    }
    if(playerChoice == (computerChoice + 1)%3){
        playerPoints++
        updateResults(`You win! ${capitalizeFirst(choiceArr[playerChoice])} beats ${choiceArr[computerChoice]}!`)
    }
    if(playerChoice == (computerChoice + 2)%3)
    {
        computerPoints++
        updateResults(`You lose! ${capitalizeFirst(choiceArr[computerChoice])} beats ${choiceArr[playerChoice]}!`)
    }
    console.log(tries++ + ', ' + playerPoints + ', ' + computerPoints);
}

function updateResults(str){
    if(playerPoints>=5){results.firstElementChild.innerText = 'Player wins!';}
    else if(computerPoints>=5){results.firstElementChild.innerText = 'Computer wins!';}
    else{results.firstElementChild.innerText = str;}
    results.lastElementChild.innerText = `Player Points: ${playerPoints} | Computer Points: ${computerPoints}`
}

function getComputerChoice(){
    //make a random number between 1 and 3
    return Math.floor(Math.random() * 3)
}

function capitalizeFirst(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}