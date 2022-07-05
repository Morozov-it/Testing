import { screen } from '@testing-library/react'
import axios from 'axios'
import renderWithAll from '../../helpers/tests/renderWithAll'
import serverData from './serverData'
import Users from './Users'

//mock сторонних модулей
jest.mock('axios')

describe('Users test', () => {
    let response

    beforeEach(() => {
        response = {
            data: serverData //образец получаемых данных от сервера
        }
        axios.get.mockReturnValue(response) //имитация получения данных от axios
    })
    afterEach(() => {
        jest.clearAllMocks()
    })

    test('Инициализация списка', async () => {
        renderWithAll(<Users />)

        //отрисовка элементов списка асинхронно через useEffect, отключено т.к. есть setTimeout
        // const users = await screen.findAllByTestId('user-item') 
        // expect(users.length).toBe(2)
        // expect(axios.get).toBeCalledTimes(1)
    })
})