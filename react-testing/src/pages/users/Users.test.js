import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import serverData from './serverData'
import Users from './Users'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import UserPage from '../user/UserPage'

//mock сторонних модулей
jest.mock('axios')

describe('Users test', () => {
    let response

    beforeEach(() => {
        response = {
            data: serverData //образец получаемых данных от сервера
        }
    })
    afterEach(() => {
        jest.clearAllMocks()
    })

    test('Инициализация списка', async () => {
        axios.get.mockReturnValue(response)
        render(<MemoryRouter><Users /></MemoryRouter>)
        const users = await screen.findAllByTestId('user-item') //отрисовка элементов списка асинхронно через useEffect
        expect(users.length).toBe(2)
        expect(axios.get).toBeCalledTimes(1)
    })

    test('редирект на страницу пользователя', async () => {
        axios.get.mockReturnValue(response)
        render(
            <MemoryRouter initialEntries={['/users']}>
                <Routes>
                    <Route path='/users' element={<Users />} />
                    <Route path='/users/:id' element={<UserPage />} />
                </Routes>
            </MemoryRouter>)
        const users = await screen.findAllByTestId('user-item')
        expect(users.length).toBe(2)
        userEvent.click(users[0])
        expect(screen.getByTestId("user-page")).toBeInTheDocument()
    })
})