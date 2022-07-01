const delay = require('./delay')

describe('delay', () => {

    test('Корректное значение', async () => { //асинхронный вызов функции
        const sum = await delay(() => 5 + 5, 1000)
        expect(sum).toBe(10) //результат работы асинхронной функции
    })

})