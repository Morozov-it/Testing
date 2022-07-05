import { render } from '@testing-library/react'
import List from './List'

const data = [
    'HTML',
    'JS',
    'TS',
    'CSS',
    'React',
    'NodeJS'
]

describe('List', () => {
    it('List snapshot', () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const list = render(<List items={data} />)

        expect(list).toMatchSnapshot()
    })
})