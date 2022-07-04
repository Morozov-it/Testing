import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../router/AppRouter'

export const withRouter = (component, initialRouter = '/') => {
    return (
        <MemoryRouter initialEntries={[initialRouter]}>
            <AppRouter />
            {component}
        </MemoryRouter>
    )
}