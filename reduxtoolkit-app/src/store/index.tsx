import { configureStore } from '@reduxjs/toolkit'

import { ICartState } from './modules/cart/types'

import createSagaMiddleware from 'redux-saga'

import rootSaga from './modules/rootSaga'
import rootReducer from './modules/rootReducer'

export interface IState{
    cart: ICartState
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = configureStore({
    reducer: rootReducer,
    middleware: [...middlewares],
})

sagaMiddleware.run(rootSaga)

export default store