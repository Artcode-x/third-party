function startTimer() {
    const timerElement = document.querySelector('.header__time')
    let sec = 0
    let min = 0

    function tick() {
        sec++
        if (sec >= 60) {
            sec = 0
            min++
        }
        return
    }

    function add() {
        tick()
        if (timerElement instanceof HTMLElement) {
            timerElement.innerHTML =
                (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec)
            window.globalState.timer = timerElement.innerHTML
        }
        timer()
        return
    }

    function timer() {
        const stopOrRunTimer = setTimeout(add, 1000)
        if (window.globalState.timerCheck === 'on') {
            clearTimeout(stopOrRunTimer)
            return
        }
        return
    }

    timer()
}

export { startTimer }
