import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Testing from './Testing'

describe('TEST APP', () => {
  // findBy - находить 1 элемент
  // findAll - находить массив элементов
  // при этом если элементы не находятся то тесты проходят, используются для Асинхронного использования

  // getBy - получить 1 элемент
  // getAll - получить массив элементов
  // при этом если элементы не получаются то тесты НЕ проходят!

  // queryBy, queryAll - для отсутствия элементов, тест пройден если нет элемента

  test('find dom element', () => {
    render(<Testing />) //сюда передается любой компонент для тестирования
    const element = screen.getByText(/hello world/i) //можно передавать RegExp
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)
    expect(element).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
    expect(input).toMatchSnapshot() //результат прошедшего теста сохраняется в файле для последующего сравнения
    // screen.debug() отображает в консоли компонент для тестирования <Testing />
  })

  test('renders', async () => {
    render(<Testing />) //сюда передается любой компонент для тестирования

    //пример с query
    // const element = screen.queryByText(/hello 2/i)
    // expect(element).toBeNull()

    // пример с find - асинхронный поиск
    //screen.debug()
    const element = await screen.findByText(/data/i)
    expect(element).toBeInTheDocument()
    expect(element).toHaveStyle({ color: 'red' })
    
    // eslint-disable-next-line testing-library/no-debugging-utils
    //screen.debug()
  })

  test('Click event', async () => {
    render(<Testing />)
    //последовательность действий:
    const btn = screen.getByTestId('toggle-btn') //синхронно, т.к. статично в разметке
    expect(screen.queryByTestId('toggle-div')).toBeNull() //сначала проверка на отсутствие

    fireEvent.click(btn) //объект для работы со всеми событиями, произошло событие
    expect(screen.getByTestId('toggle-div')).toBeInTheDocument()
    //еще один клик
    fireEvent.click(btn) 
    expect(screen.queryByTestId('toggle-div')).toBeNull()
  })

  test('Input event', async () => {
    render(<Testing />)
    //последовательность действий:
    const input = screen.getByTestId('input')
    expect(input).toContainHTML('')
    
    // Искуственные события
    // fireEvent.input(input, {
    //   target: { value: '123' } //событие ввод текста
    // })

    // События от роли пользователя
    userEvent.type(input, '123')
    expect(input).toContainHTML('123') // проверка введенного значения
  })
})


