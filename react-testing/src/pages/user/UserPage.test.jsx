import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserPage from './UserPage'

describe('UserPage', () => {
    it('typing in search works', () => {
        render(<UserPage />)
        expect(screen.queryByDisplayValue(/react/)).toBeNull()

        userEvent.type(screen.getByRole('textbox'), 'React')
        expect(screen.getByDisplayValue(/react/i)).toBeInTheDocument()
    })

    it('filter is working', () => {
        render(<UserPage />)
        expect(screen.getByText(/cs/i)).toBeInTheDocument()
        expect(screen.getByText(/html/i)).toBeInTheDocument()
        
        userEvent.type(screen.getByRole('textbox'), 'cs')
        expect(screen.queryByDisplayValue(/html/)).toBeNull()
        expect(screen.getByText(/css/i)).toBeInTheDocument()
    })

})