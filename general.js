import { renderLevelDiff } from './components/someRender.js'
// глобальное состояние проекта
window.globalState = {
    difficult: '',
    renderElement: document.getElementById('levels'),
}

renderLevelDiff()
//export { globalState }

//Последовательность реализации

//Создаем глобальный обьект в который будем сохранять все состояния игры (ур-ни сложности)
//
