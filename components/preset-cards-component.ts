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

    setTimeout(() => {
        // записываем в переменную массив из селекторов (классов), Array.from  - обозначили что .game__cards-button - массив
        const cardsButtonElements = Array.from(
            document.querySelectorAll('.game__cards-button')
        )
        startTimer()
        for (const cardsButtonElement of cardsButtonElements) {
            // говорим что в cardsButtonElement есть html эл-т, только при этом условии зайдем в if
            if (cardsButtonElement instanceof HTMLElement) {
                cardsButtonElement.classList.remove(
                    `preset__${cardsButtonElement.dataset.preset}`
                )

                cardsButtonElement.classList.add('hide')
            }
        }
        // обр-к клика вешается после срабатывания таймаута

        // указываем что в cardsButtonElements можт находится любой тип, или будет ошибка
        for (const cardsButtonElement of cardsButtonElements as any) {
            cardsButtonElement.addEventListener('click', () => {
                console.log('выбрана карта')
                //нарисовать карту которую польз выбрал, обратно доб ся класс
                cardsButtonElement.classList.add(
                    `preset__${cardsButtonElement.dataset.preset}`
                )

                // 2 вариант реализации
                switch (window.globalState.keyForSwitch) {
                    case '1 Card':
                        window.globalState.selectUserCard.push(
                            cardsButtonElement.dataset.preset
                        )
                        // запрещаем чтобы не кликать повторно
                        cardsButtonElement.disabled = true
                        console.log(window.globalState.selectUserCard)
                        window.globalState.keyForSwitch = '2 Card'

                        break

                    case '2 Card':
                        if (
                            window.globalState.selectUserCard[0] ===
                            cardsButtonElement.dataset.preset
                        ) {
                            // alert('Это успех')
                            window.globalState.timerCheck = 'on'
                            renderWin()
                        } else {
                            window.globalState.timerCheck = 'on'
                            // alert('это фиаско')
                            renderOver()
                        }
                        break

                    default: // если не зашли ни в один кейс
                        break
                }
            })
        }
        console.log('Delay for 5 seconds')
    }, 2 * 1000)
}

export { renderPresetCards }
