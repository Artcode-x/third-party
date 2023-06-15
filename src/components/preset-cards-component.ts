import { renderLevelDiff } from './someRender'
import { randomTakeCard, randomButtonElements } from '../general'
import { renderWin, renderOver } from './winAndGameOver'
import { startTimer } from './timer'
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

function headerAgainButton() {
    const letsStartNewGame = document.querySelector('.header__again-button')
    if (letsStartNewGame instanceof HTMLElement) {
        letsStartNewGame.addEventListener('click', () => {
            window.globalState.timer = '0'
            window.globalState.selectUserCard = ''
            window.globalState.keyForSwitch = '1 Card'
            window.globalState.timerCheck = 'off'
            renderLevelDiff()
        })
    }
}

function renderPresetCards() {
    if (window.globalState.renderElement instanceof HTMLElement) {
        switch (window.globalState.difficult) {
            case 'easy':
                window.globalState.countGenerateCards = 6
                randomTakeCard(3)
                window.globalState.renderElement.innerHTML = `
            <div class="game">
                ${timerElement}
                <div class="game__cards"> 
                ${randomButtonElements(6)} 
                </div>
            </div>
            `
                break
            case 'average':
                window.globalState.countGenerateCards = 12
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
                window.globalState.countGenerateCards = 18
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
        headerAgainButton()
    }
    setTimeout(() => {
        const cardsButtonElements = Array.from(
            document.querySelectorAll('.game__cards-button')
        )
        startTimer()
        for (const cardsButtonElement of cardsButtonElements) {
            if (cardsButtonElement instanceof HTMLElement) {
                cardsButtonElement.classList.remove(
                    `preset__${cardsButtonElement.dataset.preset}`
                )

                cardsButtonElement.classList.add('hide')
            }
        }

        for (const cardsButtonElement of cardsButtonElements) {
            cardsButtonElement.addEventListener('click', () => {
                if (cardsButtonElement instanceof HTMLElement) {
                    cardsButtonElement.classList.add(
                        `preset__${cardsButtonElement.dataset.preset}`
                    )

                    switch (window.globalState.keyForSwitch) {
                        case '1 Card':
                            window.globalState.selectUserCard =
                                cardsButtonElement.dataset.preset

                            if (
                                cardsButtonElement instanceof HTMLButtonElement
                            ) {
                                cardsButtonElement.disabled = true
                            }
                            window.globalState.keyForSwitch = '2 Card'

                            break

                        case '2 Card':
                            if (
                                window.globalState.selectUserCard ===
                                cardsButtonElement.dataset.preset
                            ) {
                                window.globalState.keyForSwitch = '1 Card'

                                window.globalState.openUserCards =
                                    window.globalState.openUserCards + 2

                                if (
                                    window.globalState.openUserCards ===
                                    window.globalState.countGenerateCards
                                ) {
                                    window.globalState.timerCheck = 'on'
                                    renderWin()
                                }
                            } else {
                                window.globalState.timerCheck = 'on'
                                renderOver()
                            }
                            break

                        default:
                            break
                    }
                }
            })
        }
    }, 5 * 1000)
}

export { renderPresetCards }
