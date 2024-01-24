let firstCard = 0
let secondCard = 0
let sum = 0
let card = 0
let cards = []
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
    name: "Zach",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" +  player.chips

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber >= 11) {
        return 10
    } else {
        return randomNumber
    }

}

function startGame() {
    firstCard = getRandomNumber()
    secondCard = getRandomNumber()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    isAlive = true
    hasBlackJack = false
    renderGame()
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
}
  
function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent += " " + cards[cards.length-1]
    if (sum <= 20) {
        messageEl.innerText = "Do you want to draw a new card ?"
    } else if (sum === 21) {
        messageEl.innerText = "You got a blackjack!"
        hasBlackJack = true
    } else {
        messageEl.innerText = "You're out of the game"
        isAlive = false
    }
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        card = getRandomNumber()
        sum += card
        cards.push(card)
        renderGame()
    } else {
        console.log("You can't draw new card, start another game")
    }
    

}

console.log(message)