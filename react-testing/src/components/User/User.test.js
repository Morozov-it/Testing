import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderWithAll from '../../helpers/tests/renderWithAll'
import serverData from '../../pages/users/serverData'
import User from './User'

describe('User', () => {
    let user = serverData[0] 

    test('редирект на страницу пользователя', async () => {
        renderWithAll(<User user={user} />)
        const link = screen.getByTestId('user-link')
        userEvent.click(link)
        expect(screen.getByTestId("user-page")).toBeInTheDocument()
    })
})