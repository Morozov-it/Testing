const square = require('./square')

//тесты для множества случаев
describe('square', () => {
    let mockValue

    //выполняется один раз перед всеми тестами
    beforeAll(() => { 
        //......добавить в бд
    })

    //выполняется перед каждым тестом
    beforeEach(() => { 
        mockValue = Math.random
    })

    test('Корректное значение', () => { //в одном тесте много вариантов
        expect(square(2)).toBe(4)
        expect(square(2)).toBeLessThan(5)
        expect(square(2)).toBeGreaterThan(3)
        expect(square(2)).not.toBeUndefined()
    })

    //выполняется один раз после всех тестов
    afterAll(() => { 
        //......удалить из бд
    })

    //выполняется после каждого теста
    afterEach(() => { 
        mockValue = Math.random
    })

})