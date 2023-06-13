import { renderPresetCards } from './preset-cards-component'

function renderLevelDiff() {
    if (window.globalState.renderElement instanceof HTMLElement) {
        window.globalState.renderElement.innerHTML = ` 
<section class="box">
<h1 class="box__text">Выбери сложность</h1>
<div class="box__numbers">
  <button class="box__numbers_count">1</button>
  <button class="box__numbers_count">2</button>
  <button class="box__numbers_count">3</button>
</div>
<button id="timer" class="box__button">Старт</button>
</section>
`
    }
    checkButtonsPageLevelofDiffucult()
}

//let timerInput = document.getElementById('timer')

// ф-ия для отслеживания всех кнопок

function checkButtonsPageLevelofDiffucult() {
    const levelsButtonElements = document.querySelectorAll(
        '.box__numbers_count'
    )
    const buttonStart = document.querySelector('.box__button') // так как кнопка одна в коде, пишем querySelector а не querySelectorALL

    // ! - нисмотря на то что находится в buttonStart - выполнить код далее (для ts), по типу any // buttonStart!.addEventListener('click', () => {

    // говорим что в cardsButtonElement есть html эл-т, только при этом условии зайдем в if.
    // if это ключ безопасности. Мы не зайдем в if если buttonStart не является html эл-ом.
    if (buttonStart instanceof HTMLElement) {
        buttonStart.addEventListener('click', () => {
            if (!window.globalState.difficult) {
                alert('snachala viberite yroven')
                return
            }
            // changeDifficultLevel()
            renderPresetCards()
        })
    }

    for (const levelsButtonElement of levelsButtonElements as any) {
        // 1 произвольное название (один элемент к которому обращаемся), 2 - название самой переменной (все эл-ты)
        levelsButtonElement.addEventListener('click', () => {
            switch (levelsButtonElement.textContent) {
                case '1':
                    window.globalState.difficult = 'easy'
                    break
                case '2':
                    window.globalState.difficult = 'average'
                    break
                case '3':
                    window.globalState.difficult = 'hard'
                    break
                default:
                    break
            }
        })
    }
}
export { renderLevelDiff }
