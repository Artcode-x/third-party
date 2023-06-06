function startTimer() {
    const timerElement = document.querySelector('.header__time')
    let sec = 0
    let min = 0

    let stopOrRunTimer: NodeJS.Timeout //

    function tick() {
        sec++
        if (sec >= 60) {
            sec = 0
            min++
        }
        return
    }
    // ф-ия add запускает остановку таймера и ф-ию tick
    function add() {
        tick() // прибавляет секунды и минуты
        if (window.globalState.timerCheck === 'on') {
            clearTimeout(stopOrRunTimer) //  останавливает таймер
            return
        }
        // Отрисовка таймера

        //либо воск знак , либо эта проверка
        // if (timerElement instanceof HTMLElement) {
        //     timerElement.innerHTML =
        //     (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec)
        // }
        if (timerElement instanceof HTMLElement) {
            timerElement.innerHTML =
                (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec) // если более 9 - то не нужен 0, т.к. двузначное число // если не двузначное - добавить 0
            window.globalState.timer = timerElement.innerHTML
        }
        timer()
        return
    }

    function timer() {
        stopOrRunTimer = setTimeout(add, 1000) // внутри t нах-ся метод/ф-ия setTimeout, который через сек-ду зап-т ф-ию add

        return
    }

    timer()
}

export { startTimer }
