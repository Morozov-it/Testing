const mapArrayToString = require('./mapArrayToString')

//тесты для множества случаев
describe('mapArrayToString', () => {
    test('Корректное значение', () => {
        expect(mapArrayToString([1, 2, 3])).toEqual(['1', '2', '3']) //сравнивается содержимое (глубокое сравнение для объектов)
    })

})