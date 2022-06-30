const mapArrayToString = require('./mapArrayToString')

//тесты для множества случаев
describe('mapArrayToString', () => {
    test('Корректное значение', () => {
        expect(mapArrayToString([1, 2, 3])).toEqual(['1', '2', '3']) //сравнивается содержимое (глубокое сравнение для объектов)
    })
    test('Мешанина', () => {
        expect(mapArrayToString([1, 2, 3, null, undefined, 'string'])).toEqual(['1', '2', '3'])
    })
    test('Пустой массив', () => {
        expect(mapArrayToString([])).toEqual([])
    })
    test('Отрицание', () => {
        expect(mapArrayToString([1, 2, 3])).not.toEqual([1, 2, 3]) //добавляется отрицание
    })
})