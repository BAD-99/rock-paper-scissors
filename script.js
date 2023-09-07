//get player input
//make a random choice
//calculate results
var playerPoints = 0
var computerPoints = 0

function game(){
    playerPoints = 0
    computerPoints = 0
    while(playerPoints < 3 && computerPoints < 3){
        console.log(playRound(prompt("Rock, paper, or scissors?")))
    }
    if(playerPoints == 3){
        console.log(`Player wins!`)
    }
    else{
        console.log(`Computer wins!`)
    }
}

function playRound(playerInput){
    //sanitize player input
    const choiceArr = ['rock', 'paper', 'scissors']
    let playerChoice = playerInput.toLowerCase()
    switch(playerChoice){
        case 'rock':
            playerChoice = 0
            break
        case 'paper':
            playerChoice = 1
            break
        case 'scissors':
            playerChoice = 2
            break
        default:
            return `${playerInput} is not a valid choice`
    }
    //check against computer
    let computerChoice = getComputerChoice()
    if(playerChoice == computerChoice){
        return `Draw! ${capitalizeFirst(choiceArr[playerChoice])} ties!`
    }
    if(playerChoice == (computerChoice + 1)%3){
        playerPoints++
        return `You win! ${capitalizeFirst(choiceArr[playerChoice])} beats ${choiceArr[computerChoice]}!`
    }
    if(playerChoice == (computerChoice + 2)%3)
    {
        computerPoints++
        return `You lose! ${capitalizeFirst(choiceArr[computerChoice])} beats ${choiceArr[playerChoice]}!`
    }
}

function getComputerChoice(){
    //make a random number between 1 and 3
    return Math.floor(Math.random() * 3)
}

function capitalizeFirst(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}