import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe('App Router', () => {
    test('router', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        ) //спец компонент для тестирования роутов

        //получение элементов ссылок
        const mainLink = screen.getByTestId('main-link')
        const aboutLink = screen.getByTestId('about-link')
        const usersLink = screen.getByTestId('users-link')

        //включение события клик на ссылку
        userEvent.click(aboutLink)
        //переход на компонент с элементом
        expect(screen.getByTestId('about-page')).toBeInTheDocument()

        //включение события клик на ссылку
        userEvent.click(mainLink)
        //переход на компонент с элементом
        expect(screen.getByTestId('main-page')).toBeInTheDocument()

        //включение события клик на ссылку
        userEvent.click(usersLink)
        //переход на компонент с элементом
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })

    test('error-router', async () => {
        render(
            <MemoryRouter initialEntries={['/123']}>
                <App />
            </MemoryRouter>
        ) //передается несуществующий роут

        expect(screen.getByTestId('error-page')).toBeInTheDocument()
    })
})