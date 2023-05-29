/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/preset-cards-component.js":
/*!**********************************************!*\
  !*** ./components/preset-cards-component.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderPresetCards: () => (/* binding */ renderPresetCards)
/* harmony export */ });
/* harmony import */ var _general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../general.js */ "./general.js");

const timerElement = `
<div class="header">
<div class="header__left-box">
    <div class="header__text-box">
        <p class="header__text">min</p>
        <p class="header__text">sek</p>
    </div>
    <p class="header__time">00.00</p>
</div>
<button class="header__again-button">Начать заново</button>
</div>
`

// let cardArray = [
//     {suit: 'spades', rank: 'A', название класса img './img/svg/'}
//     {suit: 'spades', rank: 'K', img './img/svg/'}
//     {suit: 'spades', rank: 'Q', img './img/svg/'}
//     {suit: 'spades', rank: 'J', img './img/svg/'}
//     {suit: 'spades', rank: '10', img './img/svg/'}
//     {suit: 'spades', rank: '9', img './img/svg/'}
//     {suit: 'spades', rank: '9', img './img/svg/'}
//     {suit: 'spades', rank: '8', img './img/svg/'}
//     {suit: 'spades', rank: '7', img './img/svg/'}
//     {suit: 'spades', rank: '6', img './img/svg/'}
// ]

//cardArray.sort(() => Math.random() - 0.5)

// const game = document.querySelector('.game_table')
// cardDeck.sort(() => Math.random() - 0.5)

// for (let i = 0; i < 3; i++) {
//     const element = array[i]
// }
// finalCardDeck.sort(() => Math.random() - 0.5)

// for (let i = 0; i < finalCardDeck.length; i++) {
//     const card = document.createElement('img')
//     card.src = './img/png/рубашка.png'
//     card.classList.add('card')
//     game?.appendChild(card)
//     card.style.height = '100px'
// }

const presetCloseCards = `
<div class= "game">
${timerElement}
<div class = "game__cards">
<button class="game__cards-button"><img src="./img/png/рубашка.png" alt="рубашка"></button>
`

const presetOpenCards = `
<div class="game">
${timerElement}
<div class="game__cards">
<button class="game__cards-button"><img src="./img/png/туз пики.png" alt="туз пики"></button>
            <button class="game__cards-button"><img src="./img/png/король пики.png" alt="король пики"></button>
            <button class="game__cards-button"><img src="./img/png/дама пики.png" alt="дама пики"></button>
            <button class="game__cards-button"><img src="./img/png/валет пики.png" alt="валет пики"></button>
            <button class="game__cards-button"><img src="./img/png/10 пики.png" alt="10 пики"></button>
            <button class="game__cards-button"><img src="./img/png/9 пики.png" alt="9 пики"></button>
            <button class="game__cards-button"><img src="./img/png/8 пики.png" alt="8 пики"></button>
            <button class="game__cards-button"><img src="./img/png/7 пики.png" alt="7 пики"></button>
            <button class="game__cards-button"><img src="./img/png/6 пики.png" alt="6 пики"></button>

            <button class="game__cards-button"><img src="./img/png/туз черви.png" alt="туз черви"></button>
            <button class="game__cards-button"><img src="./img/png/король черви.png" alt="король черви"></button>
            <button class="game__cards-button"><img src="./img/png/дама черви.png" alt="дама черви"></button>
            <button class="game__cards-button"><img src="./img/png/валет черви.png" alt="валет черви"></button>
            <button class="game__cards-button"><img src="./img/png/10 черви.png" alt="10 черви"></button>
            <button class="game__cards-button"><img src="./img/png/9 черви.png" alt="9 черви"></button>
            <button class="game__cards-button"><img src="./img/png/8 черви.png" alt="8 черви"></button>
            <button class="game__cards-button"><img src="./img/png/7 черви.png" alt="7 черви"></button>
            <button class="game__cards-button"><img src="./img/png/6 черви.png" alt="6 черви"></button>

            <button class="game__cards-button"><img src="./img/png/туз бубны.png" alt="туз бубны"></button>
            <button class="game__cards-button"><img src="./img/png/король бубны.png" alt="король бубны"></button>
            <button class="game__cards-button"><img src="./img/png/дама бубны.png" alt="дама бубны"></button>
            <button class="game__cards-button"><img src="./img/png/валет бубны (1).png" alt="валет бубны"></button>
            <button class="game__cards-button"><img src="./img/png/10 бубны.png" alt="10 бубны"></button>
            <button class="game__cards-button"><img src="./img/png/9 бубны.png" alt="9 бубны"></button>
            <button class="game__cards-button"><img src="./img/png/8 бубны.png" alt="8 бубны"></button>
            <button class="game__cards-button"><img src="./img/png/7 бубны.png" alt="7 бубны"></button>
            <button class="game__cards-button"><img src="./img/png/6 бубны.png" alt="6 бубны"></button>
            
            <button class="game__cards-button"><img src="./img/png/туз крести.png" alt="туз крести"></button></button>
            <button class="game__cards-button"><img src="./img/png/король крести.png" alt="король крести"></button>
            <button class="game__cards-button"><img src="./img/png/дама крести.png" alt="дама крести"></button>
            <button class="game__cards-button"><img src="./img/png/валет крести.png" alt="валет крести"></button>
            <button class="game__cards-button"><img src="./img/png/10 крести.png" alt="10 крести"></button>
            <button class="game__cards-button"><img src="./img/png/9 крести.png" alt="9 крести"></button>
            <button class="game__cards-button"><img src="./img/png/8 крести.png" alt="8 крести"></button>
            <button class="game__cards-button"><img src="./img/png/7 крести.png" alt="7 крести"></button>
            <button class="game__cards-button"><img src="./img/png/6 крести.png" alt="6 крести"></button>
`
function renderPresetCards() {
    switch (window.globalState.difficult) {
        case 'easy':
            ;(0,_general_js__WEBPACK_IMPORTED_MODULE_0__.randomTakeCard)(3)
            window.globalState.renderElement.innerHTML = `
            <div class="game">
                ${timerElement}
                <div class="game__cards"> 
                ${(0,_general_js__WEBPACK_IMPORTED_MODULE_0__.randomButtonElements)(6)} 
                </div>
            </div>
            `
            console.log((0,_general_js__WEBPACK_IMPORTED_MODULE_0__.randomButtonElements)(6))
            break
        case 'average':
            ;(0,_general_js__WEBPACK_IMPORTED_MODULE_0__.randomTakeCard)(6)
            window.globalState.renderElement.innerHTML = `
            <div class="game">
                ${timerElement}
                <div class="game__cards"> 
                ${(0,_general_js__WEBPACK_IMPORTED_MODULE_0__.randomButtonElements)(12)} 
                </div>
            </div>
            `
            break
        case 'hard':
            ;(0,_general_js__WEBPACK_IMPORTED_MODULE_0__.randomTakeCard)(9)
            window.globalState.renderElement.innerHTML = `
            <div class="game">
                ${timerElement}
                <div class="game__cards"> 
                ${(0,_general_js__WEBPACK_IMPORTED_MODULE_0__.randomButtonElements)(18)} 
                </div>
            </div>
            `
            break
        default:
            break
    }
    console.log(window.globalState.randomCard)
    const cardsButtonElements = document.querySelectorAll('.game__cards-button')
    for (const cardsButtonElement of cardsButtonElements) {
        cardsButtonElement.addEventListener('click', () => {
            console.log('VAY')
        })
    }
}




/***/ }),

/***/ "./components/someRender.js":
/*!**********************************!*\
  !*** ./components/someRender.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderLevelDiff: () => (/* binding */ renderLevelDiff)
/* harmony export */ });
/* harmony import */ var _preset_cards_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preset-cards-component.js */ "./components/preset-cards-component.js");
//import { changeDifficultLevel } from './changeDifficult.js'

//import { globalState } from "../general.js"
function renderLevelDiff() {
    window.globalState.renderElement.innerHTML = ` 
<section class="box">
<h1 class="box__text">Выбери сложность</h1>
<div class="box__numbers">
  <button class="box__numbers_count">1</button>
  <button class="box__numbers_count">2</button>
  <button class="box__numbers_count">3</button>
</div>
<button class="box__button">Старт</button>
</section>
`
    checkButtons_pageLevelofDiffucult()
}

// ф-ия для отслеживания всех кнопок

function checkButtons_pageLevelofDiffucult() {
    const levelsButtonElements = document.querySelectorAll(
        '.box__numbers_count'
    )
    const buttonStart = document.querySelector('.box__button') // так как кнопка одна в коде, пишем querySelector а не querySelectorALL

    buttonStart.addEventListener('click', () => {
        console.log(window.globalState.difficult)
        if (!window.globalState.difficult) {
            alert('snachala viberite yroven')
            return
        }
        // changeDifficultLevel()
        (0,_preset_cards_component_js__WEBPACK_IMPORTED_MODULE_0__.renderPresetCards)()
    })
    for (const levelsButtonElement of levelsButtonElements) {
        // 1 произвольное название (один элемент к которому обращаемся), 2 - название самой переменной (все эл-ты)
        levelsButtonElement.addEventListener('click', () => {
            switch (levelsButtonElement.textContent) {
                case '1':
                    window.globalState.difficult = 'easy'
                    break
                case '2':
                    window.globalState.difficult = 'average'
                    break
                case '3':
                    window.globalState.difficult = 'hard'
                    break
                default:
                    break
            }
        })
    }
}



/***/ }),

/***/ "./general.js":
/*!********************!*\
  !*** ./general.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randomButtonElements: () => (/* binding */ randomButtonElements),
/* harmony export */   randomTakeCard: () => (/* binding */ randomTakeCard)
/* harmony export */ });
/* harmony import */ var _components_someRender_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/someRender.js */ "./components/someRender.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./css/style.css");


//const {} = require('./style.css')
// глобальное состояние проекта
window.globalState = {
    difficult: '',
    renderElement: document.getElementById('levels'),
    cardMastyArray: ['spades', 'hearts', 'diamonds', 'christen'],
    ranksArray: ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'],
    randomCard: [], // для способа 1 и 2
}

// рандомный выбор 1 масти и 1 карты
throw new Error('NE Pushy')
function randomTakeCard(number) {
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
function randomButtonElements(number) {
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
;(0,_components_someRender_js__WEBPACK_IMPORTED_MODULE_0__.renderLevelDiff)()

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


/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./general.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map