import { all } from 'redux-saga/effects'

import cart from './cart/sagas'
import { ICartState } from './cart/types'

export default function* rootSaga(): Generator<any, ICartState, any> {
    return yield all([
        cart,
    ])
}