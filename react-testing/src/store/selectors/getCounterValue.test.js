import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
    test('work with empty state', () => {
        expect(getCounterValue({})).toBe(0)
    })
})