/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/changeDifficult.js":
/*!***************************************!*\
  !*** ./components/changeDifficult.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeDifficultLevel: () => (/* binding */ changeDifficultLevel)\n/* harmony export */ });\n/* harmony import */ var _someRender_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./someRender.js */ \"./components/someRender.js\");\n\n//import { globalState } from \"../general.js\"\n\nfunction changeDifficultLevel() {\n    switch (window.globalState.difficult) {\n        case 'easy':\n            window.globalState.renderElement.innerHTML = `\n        <h1>Уровень для слабаков</h1>\n        <button class=\"box__button\">Назад </button>\n        `\n            break\n        case 'average':\n            window.globalState.renderElement.innerHTML = `\n    <h1>Уровень среднего пути )</h1>\n    <button class=\"box__button\">Назад </button>\n    `\n            break\n        case 'hard':\n            window.globalState.renderElement.innerHTML = `\n        <h1>Уровень не для всех</h1>\n        <button class=\"box__button\">Назад </button>\n        `\n            break\n\n        default:\n            break\n    }\n    document.querySelector('.box__button').addEventListener('click', () => {\n        (0,_someRender_js__WEBPACK_IMPORTED_MODULE_0__.renderLevelDiff)()\n    })\n}\n\n\n\n\n//# sourceURL=webpack://third-party/./components/changeDifficult.js?");

/***/ }),

/***/ "./components/preset-cards-component.js":
/*!**********************************************!*\
  !*** ./components/preset-cards-component.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPresetCards: () => (/* binding */ renderPresetCards)\n/* harmony export */ });\nconst timerElement = `\n<div class=\"header\">\n<div class=\"header__left-box\">\n    <div class=\"header__text-box\">\n        <p class=\"header__text\">min</p>\n        <p class=\"header__text\">sek</p>\n    </div>\n    <p class=\"header__time\">00.00</p>\n</div>\n<button class=\"header__again-button\">Начать заново</button>\n</div>\n`\n\n// let cardArray = [\n//     {suit: 'spades', rank: 'A', название класса img './img/svg/'}\n//     {suit: 'spades', rank: 'K', img './img/svg/'}\n//     {suit: 'spades', rank: 'Q', img './img/svg/'}\n//     {suit: 'spades', rank: 'J', img './img/svg/'}\n//     {suit: 'spades', rank: '10', img './img/svg/'}\n//     {suit: 'spades', rank: '9', img './img/svg/'}\n//     {suit: 'spades', rank: '9', img './img/svg/'}\n//     {suit: 'spades', rank: '8', img './img/svg/'}\n//     {suit: 'spades', rank: '7', img './img/svg/'}\n//     {suit: 'spades', rank: '6', img './img/svg/'}\n// ]\n\n//cardArray.sort(() => Math.random() - 0.5)\nfor (let i = 0; i < 3; i++) {\n    const element = array[i]\n}\n\nconst presetCloseCards = `\n<div class= \"game\">\n${timerElement}\n<div class = \"game__cards\">\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n<button class=\"game__cards-button\"><img src=\"./img/png/рубашка.png\" alt=\"рубашка\"></button>\n`\n\nconst presetOpenCards = `\n<div class=\"game\">\n${timerElement}\n<div class=\"game__cards\">\n<button class=\"game__cards-button\"><img src=\"./img/png/туз пики.png\" alt=\"туз пики\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/король пики.png\" alt=\"король пики\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/дама пики.png\" alt=\"дама пики\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/валет пики.png\" alt=\"валет пики\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/10 пики.png\" alt=\"10 пики\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/9 пики.png\" alt=\"9 пики\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/8 пики.png\" alt=\"8 пики\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/7 пики.png\" alt=\"7 пики\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/6 пики.png\" alt=\"6 пики\"></button>\n\n            <button class=\"game__cards-button\"><img src=\"./img/png/туз черви.png\" alt=\"туз черви\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/король черви.png\" alt=\"король черви\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/дама черви.png\" alt=\"дама черви\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/валет черви.png\" alt=\"валет черви\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/10 черви.png\" alt=\"10 черви\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/9 черви.png\" alt=\"9 черви\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/8 черви.png\" alt=\"8 черви\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/7 черви.png\" alt=\"7 черви\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/6 черви.png\" alt=\"6 черви\"></button>\n\n            <button class=\"game__cards-button\"><img src=\"./img/png/туз бубны.png\" alt=\"туз бубны\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/король бубны.png\" alt=\"король бубны\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/дама бубны.png\" alt=\"дама бубны\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/валет бубны (1).png\" alt=\"валет бубны\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/10 бубны.png\" alt=\"10 бубны\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/9 бубны.png\" alt=\"9 бубны\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/8 бубны.png\" alt=\"8 бубны\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/7 бубны.png\" alt=\"7 бубны\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/6 бубны.png\" alt=\"6 бубны\"></button>\n            \n            <button class=\"game__cards-button\"><img src=\"./img/png/туз крести.png\" alt=\"туз крести\"></button></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/король крести.png\" alt=\"король крести\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/дама крести.png\" alt=\"дама крести\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/валет крести.png\" alt=\"валет крести\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/10 крести.png\" alt=\"10 крести\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/9 крести.png\" alt=\"9 крести\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/8 крести.png\" alt=\"8 крести\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/7 крести.png\" alt=\"7 крести\"></button>\n            <button class=\"game__cards-button\"><img src=\"./img/png/6 крести.png\" alt=\"6 крести\"></button>\n`\nfunction renderPresetCards() {\n    switch (window.globalState.difficult) {\n        case 'easy':\n            window.globalState.renderElement.innerHTML = presetCloseCards\n            break\n        case 'average':\n            window.globalState.renderElement.innerHTML = presetCloseCards\n            break\n        case 'hard':\n            window.globalState.renderElement.innerHTML = presetOpenCards\n            break\n        default:\n            break\n    }\n    const cardButtonElements = document.querySelectorAll('.game__cards-button')\n    for (const cardsButtonElement of cardsButtonElements) {\n        cardButtonElement\n    }\n}\n\n\n\n\n//# sourceURL=webpack://third-party/./components/preset-cards-component.js?");

/***/ }),

/***/ "./components/someRender.js":
/*!**********************************!*\
  !*** ./components/someRender.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLevelDiff: () => (/* binding */ renderLevelDiff)\n/* harmony export */ });\n/* harmony import */ var _changeDifficult_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeDifficult.js */ \"./components/changeDifficult.js\");\n/* harmony import */ var _preset_cards_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preset-cards-component.js */ \"./components/preset-cards-component.js\");\n\n\n//import { globalState } from \"../general.js\"\nfunction renderLevelDiff() {\n    window.globalState.renderElement.innerHTML = ` \n<section class=\"box\">\n<h1 class=\"box__text\">Выбери сложность</h1>\n<div class=\"box__numbers\">\n  <button class=\"box__numbers_count\">1</button>\n  <button class=\"box__numbers_count\">2</button>\n  <button class=\"box__numbers_count\">3</button>\n</div>\n<button class=\"box__button\">Старт</button>\n</section>\n`\n    checkButtons_pageLevelofDiffucult()\n}\n\n// ф-ия для отслеживания всех кнопок\n\nfunction checkButtons_pageLevelofDiffucult() {\n    const levelsButtonElements = document.querySelectorAll(\n        '.box__numbers_count'\n    )\n    const buttonStart = document.querySelector('.box__button') // так как кнопка одна в коде, пишем querySelector а не querySelectorALL\n\n    buttonStart.addEventListener('click', () => {\n        console.log(window.globalState.difficult)\n        if (!window.globalState.difficult) {\n            alert('snachala viberite yroven')\n            return\n        }\n        // changeDifficultLevel()\n        (0,_preset_cards_component_js__WEBPACK_IMPORTED_MODULE_1__.renderPresetCards)()\n    })\n    for (const levelsButtonElement of levelsButtonElements) {\n        // 1 произвольное название (один элемент к которому обращаемся), 2 - название самой переменной (все эл-ты)\n        levelsButtonElement.addEventListener('click', () => {\n            switch (levelsButtonElement.textContent) {\n                case '1':\n                    window.globalState.difficult = 'easy'\n                    break\n                case '2':\n                    window.globalState.difficult = 'average'\n                    break\n                case '3':\n                    window.globalState.difficult = 'hard'\n                    break\n                default:\n                    break\n            }\n        })\n    }\n}\n\n\n\n//# sourceURL=webpack://third-party/./components/someRender.js?");

/***/ }),

/***/ "./general.js":
/*!********************!*\
  !*** ./general.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_someRender_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/someRender.js */ \"./components/someRender.js\");\n\n// глобальное состояние проекта\nwindow.globalState = {\n    difficult: '',\n    renderElement: document.getElementById('levels'),\n    cardArray: [\n        { cardSuit: 'spades', rank: 'A', img: './img/svg/' },\n        { cardSuit: 'spades', rank: 'K', img: './img/svg/' },\n        { cardSuit: 'spades', rank: 'Q', img: './img/svg/' },\n        { cardSuit: 'spades', rank: 'J', img: './img/svg/' },\n        { cardSuit: 'spades', rank: '10', img: './img/svg/' },\n        { cardSuit: 'spades', rank: '9', img: './img/svg/' },\n        { cardSuit: 'spades', rank: '8', img: './img/svg/' },\n        { cardSuit: 'spades', rank: '7', img: './img/svg/' },\n        { cardSuit: 'spades', rank: '6', img: './img/svg/' },\n    ],\n}\n\n;(0,_components_someRender_js__WEBPACK_IMPORTED_MODULE_0__.renderLevelDiff)()\n//export { globalState }\n\n//Последовательность реализации\n\n//Создаем глобальный обьект в который будем сохранять все состояния игры (ур-ни сложности)\n//\n\n\n//# sourceURL=webpack://third-party/./general.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./general.js");
/******/ 	
/******/ })()
;