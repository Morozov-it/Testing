const validateValue = require('./validateValue')

//тест для единичного случая
test('Валидация значения', () => {
    expect(validateValue(50)).toBe(true) //в expect передается проверяемая функция 
})

//тесты для множества случаев
describe('Валидация значения', () => {
    test('Корректное значение', () => {
        expect(validateValue(50)).toBe(true) //в expect передается проверяемая функция 
    })
    test('Меньше корректного', () => {
        expect(validateValue(-1)).toBe(false) //в expect передается проверяемая функция 
    })
    test('Больше корректного', () => {
        expect(validateValue(101)).toBe(false) //в expect передается проверяемая функция 
    })
    test('Пограничное значение снизу', () => {
        expect(validateValue(0)).toBe(true) //в expect передается проверяемая функция 
    })
    test('Пограничное значение сверху', () => {
        expect(validateValue(100)).toBe(true) //в expect передается проверяемая функция 
    })
})