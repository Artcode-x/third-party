//import { changeDifficultLevel } from './changeDifficult.js'
import { renderPresetCards } from './preset-cards-component.js'
//import { globalState } from "../general.js"
function renderLevelDiff() {
    window.globalState.renderElement.innerHTML = ` 
<section class="box">
<h1 class="box__text">Выбери сложность</h1>
<div class="box__numbers">
  <button class="box__numbers_count">1</button>
  <button class="box__numbers_count">2</button>
  <button class="box__numbers_count">3</button>
</div>
<button class="box__button">Старт</button>
</section>
`
    checkButtons_pageLevelofDiffucult()
}

// ф-ия для отслеживания всех кнопок

function checkButtons_pageLevelofDiffucult() {
    const levelsButtonElements = document.querySelectorAll(
        '.box__numbers_count'
    )
    const buttonStart = document.querySelector('.box__button') // так как кнопка одна в коде, пишем querySelector а не querySelectorALL

    buttonStart.addEventListener('click', () => {
        console.log(window.globalState.difficult)
        if (!window.globalState.difficult) {
            alert('snachala viberite yroven')
            return
        }
        // changeDifficultLevel()
        renderPresetCards()
    })
    for (const levelsButtonElement of levelsButtonElements) {
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
