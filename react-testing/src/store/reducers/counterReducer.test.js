import counterReducer from './counterReducer'
import { increment, decrement } from './counterReducer'

describe('counterReducer', () => {
    test('increment', () => {
        expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 }) //глубокое сравнение полей объектов
    })
    test('decrement', () => {
        expect(counterReducer({ value: 0 }, decrement())).toEqual({ value: -1 })
    })
    test('with empty state', () => {
        expect(counterReducer(undefined, increment())).toEqual({ value: 1 })
        expect(counterReducer(undefined, decrement())).toEqual({ value: -1 })
    })
})