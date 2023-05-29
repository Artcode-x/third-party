import { renderLevelDiff } from './components/someRender.js'
const {} = require('./style.css')
// глобальное состояние проекта
window.globalState = {
    difficult: '',
    renderElement: document.getElementById('levels'),
    cardMastyArray: ['spades', 'hearts', 'diamonds', 'christen'],
    ranksArray: ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'],
    randomCard: [], // для способа 1 и 2
}

// рандомный выбор 1 масти и 1 карты
export function randomTakeCard(number) {
    // number = 3 либо 6 либо 9
    const randomPreset = new Array() // Указали что переменная будет массивом
    // let levelCountCards = new Number()
    // switch (globalState.difficult) {
    //     case 'easy':
    //         levelCountCards = 3
    //         break
    //     case 'average':
    //         levelCountCards = 6
    //         break
    //     case 'hard':
    //         levelCountCards = 9
    //         break
    //     default:
    //         break
    // }
    for (let i = 0; i < number; i++) {
        let rand = Math.floor(
            Math.random() * window.globalState.cardMastyArray.length
        )
        let rValue = window.globalState.cardMastyArray[rand]

        let rankRand = Math.floor(
            Math.random() * window.globalState.ranksArray.length
        )
        let rankValue = window.globalState.ranksArray[rankRand]

        // let peremennaya = rValue + rankValue   // 1 способ
        // window.globalState.randomCard.push(peremennaya) // 1 способ

        // window.globalState.randomCard[i] = rValue + rankValue // создаем перем-ую в которой масть и ранк // 2 способ
        randomPreset[i] = rValue + rankValue
    }
    window.globalState.randomCard = [...randomPreset, ...randomPreset] // ... - массив первый, хотим обьеденить со вторым. Затем записать в нов-ый массив randomCard
    // ... - синаксис обьеденения двух массивов в новый массив
}
//запись всех рандомных кнопок
export function randomButtonElements(number) {
    // 3/6/9
    let array = new Array() // в этот массив будут записываться все рандомные кнопки
    for (let i = 0; i < number; i++) {
        const randomnoeChislo = Math.floor(
            Math.random() * window.globalState.randomCard.length // на основе массива randomCard - из него берем рандомные карты
        )
        console.log(randomnoeChislo)
        array[i] = `
        <button data-preset="${window.globalState.randomCard[randomnoeChislo]}" class="game__cards-button preset__${window.globalState.randomCard[randomnoeChislo]}"></button> 
        ` // то что записывается в дата атрибут, записывается и в класс кнопки

        // убираем кнопки чтобы не задублировались
        globalState.randomCard.splice(randomnoeChislo, 1) // 1 - то что удалить только один эл-т
        console.log(globalState.randomCard)
        // в дата атрибут preset записывается карта, из рандомного массива randomnoeChislo
        // из randomCard берется ранд карта и записывается в массив randomnoeChislo
    }
    console.log(array.join(''))
    return array.join('') // возвращаем строку кнопок
}
//randomTakeCard(3)
console.log(window.globalState.randomCard)
//randomButtonElements(6)
renderLevelDiff()

//export { globalState }

//Последовательность реализации

//Создаем глобальный обьект в который будем сохранять все состояния игры (ур-ни сложности)
//

// cardArray: [

//     { cardSuit: 'hearts', rank: 'A', img: './img/svg/' },
//     { cardSuit: 'hearts', rank: 'K', img: './img/svg/' },
//     { cardSuit: 'hearts', rank: 'Q', img: './img/svg/' },
//     { cardSuit: 'hearts', rank: 'J', img: './img/svg/' },
//     { cardSuit: 'hearts', rank: '10', img: './img/svg/' },
//     { cardSuit: 'hearts', rank: '9', img: './img/svg/' },
//     { cardSuit: 'hearts', rank: '8', img: './img/svg/' },
//     { cardSuit: 'hearts', rank: '7', img: './img/svg/' },
//     { cardSuit: 'hearts', rank: '6', img: './img/svg/' },

// ],
