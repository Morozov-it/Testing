import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '../helpers/renderWithRouter'
import NavBar from './NavBar'

describe('NavBar test', () => {
    test('test main link', async () => {
        renderWithRouter(<NavBar />)
        //получение элементов ссылок
        const mainLink = screen.getByTestId('main-link')
        //включение события клик на ссылку
        userEvent.click(mainLink)
        //переход на компонент с элементом
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })

    test('test about link', async () => {
        renderWithRouter(<NavBar />)
        //получение элементов ссылок
        const aboutLink = screen.getByTestId('about-link')
        //включение события клик на ссылку
        userEvent.click(aboutLink)
        //переход на компонент с элементом
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })

    test('test users link', async () => {
        renderWithRouter(<NavBar />)
        //получение элементов ссылок
        const usersLink = screen.getByTestId('users-link')
        //включение события клик на ссылку
        userEvent.click(usersLink)
        //переход на компонент с элементом
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })
})