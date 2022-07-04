import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import { renderWithRouter } from '../../helpers/renderWithRouter'
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
        renderWithRouter(<Users />)
        const users = await screen.findAllByTestId('user-item') //отрисовка элементов списка асинхронно через useEffect
        expect(users.length).toBe(2)
        expect(axios.get).toBeCalledTimes(1)
    })

    test('редирект на страницу пользователя', async () => {
        renderWithRouter(<Users />) //т.к. в компоненте Users нет ссылок для перехода как в App
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(2)
        userEvent.click(users[0])
        expect(screen.getByTestId("user-page")).toBeInTheDocument()
    })
})