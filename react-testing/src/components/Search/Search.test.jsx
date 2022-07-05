import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Search from './Search'

const onChange = jest.fn() //функция заглушка

describe('Search', () => {
    it('render component', () => {
        render(
            <Search value="" onChange={onChange}>
                Find:
            </Search>
        )

        expect(screen.getByText(/find/i)).toBeInTheDocument() // это рег.выражение /find/i для поиска совпадения без регистра
    })

    it('onChange works', () => {
        render(<Search value="" onChange={onChange}/>)

        userEvent.type(screen.getByRole('textbox'), 'react') //имитация ввода текста пользователем
        expect(onChange).toHaveBeenCalledTimes(5)
    })

    it('dynamic styles works', () => {
        render(<Search value="ts" onChange={onChange}>find:</Search>)

        expect(screen.getByRole('textbox')).toHaveClass('input')
        expect(screen.getByRole('textbox')).toHaveClass('filled')
        expect(screen.getByText(/find/i)).toHaveClass('label')
    })
})