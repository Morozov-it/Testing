const getData = require('./getData')
const axios = require('axios')
const serverData = require('./serverData')

//mock сторонних модулей
jest.mock('axios')

describe('getData', () => {
    let response

    beforeEach(() => {
        response = {
            data: serverData //образец получаемых данных от сервера
        }
    })
    test('Корректное значение', async () => {
        axios.get.mockReturnValue(response)
        const data = await getData()

        expect(axios.get).toBeCalledTimes(1)
        //expect(data).toEqual(['1', '2'])
        // expect(data).toMatchSnapshot() //создается файл с результатами, и при последующем запуске теста идет сравнение с правильным файлом
    })

})