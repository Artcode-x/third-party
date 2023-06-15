import { renderLevelDiff } from './components/someRender'
import './css/style.css'
//const {} = require('./style.css')
// глобальное состояние проекта
interface globalArrayType {
    difficult: string
    renderElement: HTMLElement | null
    cardMastyArray: Array<string> // скобки - generec-и
    ranksArray: Array<string>
    randomCard: Array<string>
    selectUserCard: string | undefined
    keyForSwitch: string
    timerCheck: string
    timer: string
    countGenerateCards: number
    openUserCards: number
}
declare global {
    // декларируем об обьявлении глоб переменной

    // инт-с - все что связано с работой в браузере. инт-с позволяет повторно добавлять новые св-ва, в отличии от type

    // через interface указываем что обьект внутри window будет расширяемым (можно будет доб-ть новые св-ва)
    interface Window {
        globalState: globalArrayType
    }
}
window.globalState = {
    difficult: '',
    renderElement: document.getElementById('levels'),
    cardMastyArray: ['spades', 'hearts', 'diamonds', 'christen'],
    ranksArray: ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'],
    randomCard: [], // для способа 1 и 2
    selectUserCard: '', // какие карты выбрал пользователь
    keyForSwitch: '1 Card',
    timerCheck: 'off',
    timer: '0',
    countGenerateCards: 0,
    openUserCards: 0,
}

// рандомный выбор 1 масти и 1 карты

export function randomTakeCard(number: number) {
    // number = 3 либо 6 либо 9
    const randomPreset = [] //new Array() // Указали что переменная будет массивом

    for (let i = 0; i < number; i++) {
        const rand = Math.floor(
            Math.random() * window.globalState.cardMastyArray.length
        )
        const rValue = window.globalState.cardMastyArray[rand]

        const rankRand = Math.floor(
            Math.random() * window.globalState.ranksArray.length
        )
        const rankValue = window.globalState.ranksArray[rankRand]

        randomPreset[i] = rValue + rankValue
    }
    window.globalState.randomCard = [...randomPreset, ...randomPreset]
}

//запись всех рандомных кнопок
export function randomButtonElements(number: number) {
    // 3/6/9
    const array = []
    for (let i = 0; i < number; i++) {
        const randomnoeChislo = Math.floor(
            Math.random() * window.globalState.randomCard.length
        )

        array[i] = `
        <button data-preset="${window.globalState.randomCard[randomnoeChislo]}" class="game__cards-button preset__${window.globalState.randomCard[randomnoeChislo]}"></button> 
        `
        window.globalState.randomCard.splice(randomnoeChislo, 1)
    }

    return array.join('')
}
renderLevelDiff()
