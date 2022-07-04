import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterReducer'

//один корневой редюсер
const rootReducer = combineReducers({
    counter: counterReducer,
})

export const createReduxStore = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState
    })
} 
