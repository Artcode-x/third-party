const timerElement = `
<div class="timer__left">
<div class="timer__left-box">
    <div class="timer__text-box">
        <p class="timer__text">min</p>
        <p class="timer__text">sek</p>
    </div>
    <p class="timer__time">00.00</p>
</div>
<button class="timer__again-button">Начать заново</button>
</div>
`

const presetCloseCards = `
<div class= "game">
${timerElement}
<div class = "game__cards">
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
<button class="game__cards-button"></button>
`

const presetOpenCards = `
<div class="game">
${timerElement}
<div class="game__cards">
<button class="game__cards-button"></button>
`
function renderPresetCards() {
    switch (window.globalState.difficult) {
        case 'easy':
            window.globalThis.levelsElement.innerHtml = presetCloseCards
            break
        case 'average':
            window.globalThis.levelsElement.innerHtml = presetCloseCards
            break
        case 'hard':
            window.globalThis.levelsElement.innerHtml = presetCloseCards
            break
        default:
            break
    }
    const cardButtonElements = document.querySelectorAll('.game__cards-button')
    for (const cardsButtonElement of cardsButtonElements) {
        cardButtonElement
    }
}

export { renderPresetCards }
