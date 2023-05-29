import { randomTakeCard, randomButtonElements } from '../general.js'
const timerElement = `
<div class="header">
<div class="header__left-box">
    <div class="header__text-box">
        <p class="header__text">min</p>
        <p class="header__text">sek</p>
    </div>
    <p class="header__time">00.00</p>
</div>
<button class="header__again-button">Начать заново</button>
</div>
`

// let cardArray = [
//     {suit: 'spades', rank: 'A', название класса img './img/svg/'}
//     {suit: 'spades', rank: 'K', img './img/svg/'}
//     {suit: 'spades', rank: 'Q', img './img/svg/'}
//     {suit: 'spades', rank: 'J', img './img/svg/'}
//     {suit: 'spades', rank: '10', img './img/svg/'}
//     {suit: 'spades', rank: '9', img './img/svg/'}
//     {suit: 'spades', rank: '9', img './img/svg/'}
//     {suit: 'spades', rank: '8', img './img/svg/'}
//     {suit: 'spades', rank: '7', img './img/svg/'}
//     {suit: 'spades', rank: '6', img './img/svg/'}
// ]

//cardArray.sort(() => Math.random() - 0.5)

// const game = document.querySelector('.game_table')
// cardDeck.sort(() => Math.random() - 0.5)

// for (let i = 0; i < 3; i++) {
//     const element = array[i]
// }
// finalCardDeck.sort(() => Math.random() - 0.5)

// for (let i = 0; i < finalCardDeck.length; i++) {
//     const card = document.createElement('img')
//     card.src = './img/png/рубашка.png'
//     card.classList.add('card')
//     game?.appendChild(card)
//     card.style.height = '100px'
// }

const presetCloseCards = `
<div class= "game">
${timerElement}
<div class = "game__cards">
<button class="game__cards-button"><img src="./img/png/рубашка.png" alt="рубашка"></button>
`

const presetOpenCards = `
<div class="game">
${timerElement}
<div class="game__cards">
<button class="game__cards-button"><img src="./img/png/туз пики.png" alt="туз пики"></button>
            <button class="game__cards-button"><img src="./img/png/король пики.png" alt="король пики"></button>
            <button class="game__cards-button"><img src="./img/png/дама пики.png" alt="дама пики"></button>
            <button class="game__cards-button"><img src="./img/png/валет пики.png" alt="валет пики"></button>
            <button class="game__cards-button"><img src="./img/png/10 пики.png" alt="10 пики"></button>
            <button class="game__cards-button"><img src="./img/png/9 пики.png" alt="9 пики"></button>
            <button class="game__cards-button"><img src="./img/png/8 пики.png" alt="8 пики"></button>
            <button class="game__cards-button"><img src="./img/png/7 пики.png" alt="7 пики"></button>
            <button class="game__cards-button"><img src="./img/png/6 пики.png" alt="6 пики"></button>

            <button class="game__cards-button"><img src="./img/png/туз черви.png" alt="туз черви"></button>
            <button class="game__cards-button"><img src="./img/png/король черви.png" alt="король черви"></button>
            <button class="game__cards-button"><img src="./img/png/дама черви.png" alt="дама черви"></button>
            <button class="game__cards-button"><img src="./img/png/валет черви.png" alt="валет черви"></button>
            <button class="game__cards-button"><img src="./img/png/10 черви.png" alt="10 черви"></button>
            <button class="game__cards-button"><img src="./img/png/9 черви.png" alt="9 черви"></button>
            <button class="game__cards-button"><img src="./img/png/8 черви.png" alt="8 черви"></button>
            <button class="game__cards-button"><img src="./img/png/7 черви.png" alt="7 черви"></button>
            <button class="game__cards-button"><img src="./img/png/6 черви.png" alt="6 черви"></button>

            <button class="game__cards-button"><img src="./img/png/туз бубны.png" alt="туз бубны"></button>
            <button class="game__cards-button"><img src="./img/png/король бубны.png" alt="король бубны"></button>
            <button class="game__cards-button"><img src="./img/png/дама бубны.png" alt="дама бубны"></button>
            <button class="game__cards-button"><img src="./img/png/валет бубны (1).png" alt="валет бубны"></button>
            <button class="game__cards-button"><img src="./img/png/10 бубны.png" alt="10 бубны"></button>
            <button class="game__cards-button"><img src="./img/png/9 бубны.png" alt="9 бубны"></button>
            <button class="game__cards-button"><img src="./img/png/8 бубны.png" alt="8 бубны"></button>
            <button class="game__cards-button"><img src="./img/png/7 бубны.png" alt="7 бубны"></button>
            <button class="game__cards-button"><img src="./img/png/6 бубны.png" alt="6 бубны"></button>
            
            <button class="game__cards-button"><img src="./img/png/туз крести.png" alt="туз крести"></button></button>
            <button class="game__cards-button"><img src="./img/png/король крести.png" alt="король крести"></button>
            <button class="game__cards-button"><img src="./img/png/дама крести.png" alt="дама крести"></button>
            <button class="game__cards-button"><img src="./img/png/валет крести.png" alt="валет крести"></button>
            <button class="game__cards-button"><img src="./img/png/10 крести.png" alt="10 крести"></button>
            <button class="game__cards-button"><img src="./img/png/9 крести.png" alt="9 крести"></button>
            <button class="game__cards-button"><img src="./img/png/8 крести.png" alt="8 крести"></button>
            <button class="game__cards-button"><img src="./img/png/7 крести.png" alt="7 крести"></button>
            <button class="game__cards-button"><img src="./img/png/6 крести.png" alt="6 крести"></button>
`
function renderPresetCards() {
    switch (window.globalState.difficult) {
        case 'easy':
            randomTakeCard(3)
            window.globalState.renderElement.innerHTML = `
            <div class="game">
                ${timerElement}
                <div class="game__cards"> 
                ${randomButtonElements(6)} 
                </div>
            </div>
            `
            console.log(randomButtonElements(6))
            break
        case 'average':
            randomTakeCard(6)
            window.globalState.renderElement.innerHTML = `
            <div class="game">
                ${timerElement}
                <div class="game__cards"> 
                ${randomButtonElements(12)} 
                </div>
            </div>
            `
            break
        case 'hard':
            randomTakeCard(9)
            window.globalState.renderElement.innerHTML = `
            <div class="game">
                ${timerElement}
                <div class="game__cards"> 
                ${randomButtonElements(18)} 
                </div>
            </div>
            `
            break
        default:
            break
    }
    console.log(window.globalState.randomCard)
    const cardsButtonElements = document.querySelectorAll('.game__cards-button')
    for (const cardsButtonElement of cardsButtonElements) {
        cardsButtonElement.addEventListener('click', () => {
            console.log('VAY')
        })
    }
}

export { renderPresetCards }
