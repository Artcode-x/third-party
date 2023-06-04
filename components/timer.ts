function startTimer() {
    const timerElement = document.querySelector('.header__time')
    let sec = 0
    let min = 0
    let t: any

    function tick() {
        sec++
        if (sec >= 60) {
            sec = 0
            min++
            if (min >= 60) {
                min = 0
            }
        }
        return
    }

    function add() {
        if (window.globalState.timerCheck === 'on') {
            clearTimeout(t) //  останавливает таймер
            return
        }
        tick()
        timerElement!.innerHTML =
            (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec)
        // globalThis.timer = timerElement!.innerHTML;
        window.globalState.timer = timerElement!.innerHTML
        timer()
        return
    }

    function timer() {
        t = setTimeout(add, 1000)
        return
    }

    timer()
}

export { startTimer }
