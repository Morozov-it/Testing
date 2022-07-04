import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../router/AppRouter'
import { createReduxStore } from '../../store/store'

export const renderWithRouter = (component, initialRouter = '/') => {
    return render(
        <Provider store={createReduxStore()}>
            <MemoryRouter initialEntries={[initialRouter]}>
                <AppRouter />
                {component}
            </MemoryRouter>
        </Provider>
    )
}