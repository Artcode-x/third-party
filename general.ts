import { renderLevelDiff } from './components/someRender'
import './css/style.css'
//const {} = require('./style.css')
// глобальное состояние проекта
declare global {
    // декларируем об обьявлении глоб переменной

    // инт-с - все что связано с работой в браузере. инт-с позволяет повторно добавлять новые св-ва, в отличии от type

    // через interface указываем что обьект внутри window будет расширяемым (можно будет доб-ть новые св-ва)
    interface Window {
        globalState: any
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
let number: number
export function randomTakeCard(number: number) {
    // number = 3 либо 6 либо 9
    const randomPreset = new Array() // Указали что переменная будет массивом

    for (let i = 0; i < number; i++) {
        let rand = Math.floor(
            Math.random() * window.globalState.cardMastyArray.length
        )
        let rValue = window.globalState.cardMastyArray[rand]

        let rankRand = Math.floor(
            Math.random() * window.globalState.ranksArray.length
        )
        let rankValue = window.globalState.ranksArray[rankRand]

        randomPreset[i] = rValue + rankValue
    }
    window.globalState.randomCard = [...randomPreset, ...randomPreset] // ... - массив первый, хотим обьеденить со вторым. Затем записать в нов-ый массив randomCard
    // ... - синаксис обьеденения двух массивов в новый массив
}

//запись всех рандомных кнопок
export function randomButtonElements(number: number) {
    // 3/6/9
    let array = new Array() // в этот массив будут записываться все рандомные кнопки
    for (let i = 0; i < number; i++) {
        const randomnoeChislo = Math.floor(
            Math.random() * window.globalState.randomCard.length // на основе массива randomCard - из него берем рандомные карты
        )
        // console.log(randomnoeChislo)
        array[i] = `
        <button data-preset="${window.globalState.randomCard[randomnoeChislo]}" class="game__cards-button preset__${window.globalState.randomCard[randomnoeChislo]}"></button> 
        ` // то что записывается в дата атрибут, записывается и в класс кнопки

        // убираем кнопки чтобы не задублировались
        window.globalState.randomCard.splice(randomnoeChislo, 1) // 1 - то что удалить только один эл-т
        //console.log(window.globalState.randomCard)
        // в дата атрибут preset записывается карта, из рандомного массива randomnoeChislo
        // из randomCard берется ранд карта и записывается в массив randomnoeChislo
    }

    return array.join('') // возвращаем строку кнопок
}
renderLevelDiff()
