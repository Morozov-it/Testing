import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { withRedux } from '../../helpers/tests/withRedux'
import Counter from './Counter'

describe('Counter', () => {
    test('increment-btn', async () => {
        const { getByTestId } = render(withRedux(<Counter />, {
            counter: {
                value: 10
            }
        })) //работа с самим компонентом

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const incrementBtn = getByTestId("increment-btn")
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId("value")).toHaveTextContent('10')

        userEvent.click(incrementBtn)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId("value")).toHaveTextContent('11')
    })
    test('decrement-button', async () => {
        
    })
})