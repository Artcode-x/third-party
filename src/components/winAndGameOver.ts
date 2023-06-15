import { renderLevelDiff } from './someRender'
//<img src="../img/png/win.png" alt="">
function renderWin() {
    if (window.globalState.renderElement) {
        window.globalState.renderElement.innerHTML = ` 
    <section class="win">
    <div class="win__image"></div>
    <div class="win__text">Вы красавчик!</div>
    <div class="win__text2">Затраченное время:</div>
    <div class="win__timer">${window.globalState.timer}</div>
    <div class="win__button">Играть снова</div>
    </section>
`
    }
    checkButtonNewGame()
}

function renderOver() {
    if (window.globalState.renderElement) {
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
    }
    checkButtonOverGame()
}

function checkButtonOverGame() {
    const reloadPage = document.querySelector('.over__button')
    if (reloadPage instanceof HTMLElement) {
        reloadPage.addEventListener('click', () => {
            window.globalState.timer = '0'
            window.globalState.selectUserCard = ''
            window.globalState.keyForSwitch = '1 Card'
            window.globalState.timerCheck = 'off'
            renderLevelDiff()
        })
    }
}

function checkButtonNewGame() {
    const reloadGame = document.querySelector('.win__button')
    if (reloadGame instanceof HTMLElement) {
        reloadGame.addEventListener('click', () => {
            window.globalState.timer = '0'
            window.globalState.selectUserCard = ''
            window.globalState.keyForSwitch = '1 Card'
            window.globalState.timerCheck = 'off'
            renderLevelDiff()
        })
    }
}

export { renderWin, renderOver }
