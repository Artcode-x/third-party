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
function checkButtonsPageLevelofDiffucult() {
    const levelsButtonElements = Array.from(
        document.querySelectorAll('.box__numbers_count')
    )
    const buttonStart = document.querySelector('.box__button')
    if (buttonStart instanceof HTMLElement) {
        buttonStart.addEventListener('click', () => {
            if (!window.globalState.difficult) {
                alert('snachala viberite yroven')
                return
            }
            renderPresetCards()
        })
    }

    for (const levelsButtonElement of levelsButtonElements) {
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
