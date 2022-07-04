import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../store/store'
import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../router/AppRouter'

const renderWithAll = (component, options) => {
    return render (
        <Provider store={createReduxStore(options?.initialState)}>
            <MemoryRouter initialEntries={[options?.initialRouter]}>
                <AppRouter />
                {component}
            </MemoryRouter>
        </Provider>
    )
}

export default renderWithAll