import { renderLevelDiff } from './someRender.js'
//import { globalState } from "../general.js"

function changeDifficultLevel() {
    switch (window.globalState.difficult) {
        case 'easy':
            window.globalState.renderElement.innerHTML = `
        <h1>Уровень для слабаков</h1>
        <button class="box__button">Назад </button>
        `
            break
        case 'average':
            window.globalState.renderElement.innerHTML = `
    <h1>Уровень среднего пути )</h1>
    <button class="box__button">Назад </button>
    `
            break
        case 'hard':
            window.globalState.renderElement.innerHTML = `
        <h1>Уровень не для всех</h1>
        <button class="box__button">Назад </button>
        `
            break

        default:
            break
    }
    document.querySelector('.box__button').addEventListener('click', () => {
        renderLevelDiff()
    })
}

export { changeDifficultLevel }
