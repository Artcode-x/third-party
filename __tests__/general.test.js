/* eslint-disable @typescript-eslint/no-array-constructor */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { it, expect, describe } = require('@jest/globals')

import { randomButtonElements } from '../src/general'

// блок с тестами, объединяет разные тесты(it) в одном блоке
describe('Проверяет ф-ии внутри general.ts', () => {
    it('проверка ф-ии randomButtonElements, проверка: явл-ся ли return у ф-ии - строкой', () => {
        const number = 6
        let result = new Array()

        // выполнение самой ф-ии
        result = randomButtonElements(number)

        // сравнение с тем что получилось по вып-ю ф-ии
        expect(result).toEqual(expect.any(String))
    })

    it('Сравнение - есть ли в result - строка button', () => {
        const number = 6
        let result = new Array()

        // выполнение самой ф-ии
        result = randomButtonElements(number)

        // Сравнение - есть ли в result - строка button
        expect(result).toMatch('button')
    })
})
