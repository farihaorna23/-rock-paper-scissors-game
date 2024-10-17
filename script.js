let rock = document.querySelector('#Rock')
let paper = document.querySelector('#Paper')
let scissor = document.querySelector('#Scissor')
let rockImg = document.querySelector('#rock-img')
let paperImg = document.querySelector('#paper-img')
let scissorImg = document.querySelector('#scissor-img')
let msg = document.querySelector(".msg")
let userScore = document.querySelector(".user-score")
let compScore = document.querySelector(".comp-score")
let playAgainBtn = document.querySelector(".play-again-btn")

let uScore = 0
let cScore = 0
// function will check who won
//will return an object with who won and what the message board would say
const winCheck = (userChoice, compChoice) => {
    
    if (userChoice == compChoice){
        return {
            "result" : "Draw",
            "msg" : "Draw! Let's play again!"
        }
    }
    else if((userChoice == "Rock" && compChoice == "Scissor") || (userChoice == "Paper" && compChoice == "Rock") || (userChoice == "Scissor" && compChoice == "Paper")){
        return {
            "result" : "User",
            "msg" : `You won! ${userChoice} beats ${compChoice}`
        }
    }else{
        return {
            "result" : "Computer",
            "msg": `Computer won! ${compChoice} beats ${userChoice}`
        }
    }
}

// function will generate a choice for the computer
const compChoice = () => {
let choice = ""
let randomNum = Math.floor(Math.random() * 3) + 1;

if(randomNum == 1){
    choice = "Rock"
    rockImg.style.border = "4px solid red"
}else if (randomNum == 2){
    choice = "Scissor"
    scissorImg.style.border = "4px solid red"
}else{
    choice = "Paper"
    paperImg.style.border = "4px solid red"
}

return choice
}

//function will update the scores and the message board
const resultUpdate = (outcome) => {
    if (outcome["result"] == "Draw"){
        uScore += 1
        cScore += 1
    }
    else if (outcome["result"] == "User"){
        uScore += 1
    }else{
        cScore += 1
    }
    //update the score board
    userScore.textContent = `${uScore}`
    compScore.textContent = `${cScore}`

    //update the message board
    //update the message board
    let message = outcome["msg"]
    msg.textContent = message

    //show the play again button
    console.log(playAgainBtn)
    playAgainBtn.style.display = "block"
}

//user picks rock
let rockHandler = () => {
    // highlight users choice
    rockImg.style.border = "4px solid black"
    // get computer's choice
    let computerChoice = compChoice()
    // check who won
    let outcome = winCheck("Rock",computerChoice)
    console.log(outcome)
    //update the message and score board
    resultUpdate(outcome)
}
    
let paperHandler = () => {
  // highlight users choice
  rockImg.style.border = "4px solid black"
  // get computer's choice
  let computerChoice = compChoice()
  // check who won
  let outcome = winCheck("Paper",computerChoice)
  console.log(outcome)
  //update the message and score board
  resultUpdate(outcome)
}
    
let scissorHandler = () => {
  // highlight users choice
  rockImg.style.border = "4px solid black"
  // get computer's choice
  let computerChoice = compChoice()
  // check who won
  let outcome = winCheck("Scissor",computerChoice)
  console.log(outcome)
  //update the message and score board
  resultUpdate(outcome)
}  
    
Rock.addEventListener('click',rockHandler)
Paper.addEventListener('click',paperHandler)
Scissor.addEventListener('click',scissorHandler)
    