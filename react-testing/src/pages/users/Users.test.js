import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
        const users = await screen.findAllByTestId('user-item') //отрисовка элементов списка асинхронно через useEffect
        expect(users.length).toBe(2)
        expect(axios.get).toBeCalledTimes(1)
    })

    test('редирект на страницу пользователя', async () => {
        renderWithAll(<Users />)
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(2)
        userEvent.click(users[0])
        expect(screen.getByTestId("user-page")).toBeInTheDocument()
    })
})