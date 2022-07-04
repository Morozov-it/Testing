import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderWithAll from '../../helpers/tests/renderWithAll'
import NavBar from './NavBar'

describe('NavBar test', () => {
    test('main link', async () => {
        renderWithAll(<NavBar />)
        //получение элементов ссылок
        const mainLink = screen.getByTestId('main-link')
        //включение события клик на ссылку
        userEvent.click(mainLink)
        //переход на компонент с элементом
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })

    test('about link', async () => {
        renderWithAll(<NavBar />)
        //получение элементов ссылок
        const aboutLink = screen.getByTestId('about-link')
        //включение события клик на ссылку
        userEvent.click(aboutLink)
        //переход на компонент с элементом
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })

    test('users link', async () => {
        renderWithAll(<NavBar />)
        //получение элементов ссылок
        const usersLink = screen.getByTestId('users-link')
        //включение события клик на ссылку
        userEvent.click(usersLink)
        //переход на компонент с элементом
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })

    test('error-router', async () => {
        renderWithAll(<NavBar />, { initialRouter: '/123'})
        expect(screen.getByTestId('error-page')).toBeInTheDocument()
    })
})