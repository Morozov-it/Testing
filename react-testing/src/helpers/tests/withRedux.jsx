import { Provider } from 'react-redux'
import { createReduxStore } from '../../store/store'

export const withRedux = (component, initialState) => {
    return (
        <Provider store={createReduxStore(initialState)}>
            {component}
        </Provider>
    )
}