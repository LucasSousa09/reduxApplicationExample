import { AxiosResponse } from 'axios'
import { all, takeLatest, call, select, put } from 'redux-saga/effects'
import { IState } from '../..'
import api from '../../../services/api'
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions'

interface IStock {
    id: number,
    quantity: number
}

type CheckProductStockProps = ReturnType<typeof addProductToCartRequest>

function* checkProductStock(action: CheckProductStockProps){
    const { product } = action.payload

    const productStockRequest: AxiosResponse<IStock> = yield call(api.get, `stock/${product.id}`)

    const currentProductQuantityOnCart: number = yield select((state: IState) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
    })

    if(productStockRequest.data.quantity > currentProductQuantityOnCart){
        yield put(addProductToCartSuccess(product))
    }
    else{
        yield put(addProductToCartFailure(product.id))
    }

}

export default all([
    takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)
])