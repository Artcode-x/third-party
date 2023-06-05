import { renderLevelDiff } from './someRender'
//<img src="../img/png/win.png" alt="">
function renderWin() {
    window.globalState.renderElement.innerHTML = ` 
    <section class="win">
    <div class="win__image"></div>
    <div class="win__text">Вы красавчик!</div>
    <div class="win__text2">Затраченное время:</div>
    <div class="win__timer">${window.globalState.timer}</div>
    <div class="win__button">Играть снова</div>
    </section>
`
    checkButtonNewGame()
}

function renderOver() {
    window.globalState.renderElement.innerHTML = ` 
    <section class="over">
    <div class="over__image">
        <img src="../img/png/over.png" alt="">
    </div>
    <div class="over__text">Вы проиграли!</div>
    <div class="over__text2">Затраченное время:</div>
    <div class="over__timer">${window.globalState.timer}</div>
    <div class="over__button">Играть снова</div>
    </section>
    `
    checkButtonNewGame()
}

function checkButtonNewGame() {
    const reloadGame = document.querySelector('.win__button')
    if (reloadGame instanceof HTMLElement) {
        reloadGame.addEventListener('click', () => {
            window.globalState.timer = 0 // сбрасываем таймер
            window.globalState.selectUserCard = [] // сброс выбора карт
            window.globalState.keyForSwitch = '1 Card' // чтобы зайти в 1 кейс
            window.globalState.timerCheck = 'off' // сбрасываем timerCheck в начальное сост-ие чтобы таймер запускался
            renderLevelDiff()
        })
    }
}

export { renderWin, renderOver }
