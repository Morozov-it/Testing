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
        // mockValue = Math.random
    })

    test('Корректное значение', () => { //в одном тесте много вариантов
        expect(square(2)).toBe(4)
        expect(square(2)).toBeLessThan(5)
        expect(square(2)).toBeGreaterThan(3)
        expect(square(2)).not.toBeUndefined()
    })
    test('Количество вызовов', () => { 
        const spyMathPow = jest.spyOn(Math, 'pow') // создание моковой функции
        square(2)
        expect(spyMathPow).toBeCalledTimes(1) // регистрируется количество вызовов функции (метода)
    })

    //выполняется один раз после всех тестов
    afterAll(() => { 
        jest.clearAllMocks() // очистка всех моков после каждого теста
    })

    //выполняется после каждого теста
    afterEach(() => { 
        // mockValue = Math.random
    })

})