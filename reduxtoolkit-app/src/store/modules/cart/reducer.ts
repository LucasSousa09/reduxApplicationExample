import { Reducer } from "@reduxjs/toolkit"
import produce from 'immer'

import { ICartState } from "./types"

const INITIAL_STATE: ICartState = {
    items: [],
    checkedStockFailure: []
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, actions) => {
    return produce(state, draft => {
        switch(actions.type){ 
            case 'ADD_PRODUCT_TO_CART_SUCCESS':{
                const { product } = actions.payload

                const productInCartIndex = state.items.findIndex(item => {
                    if(item.product.id !== product.id){
                        return
                    }
                    return product
                })

                if(productInCartIndex >= 0) {
                    draft.items[productInCartIndex].quantity++
                }
                else {
                    draft.items.push({
                        product,
                        quantity: 1
                    })
                }
                
                break
         }
            case 'ADD_PRODUCT_TO_CART_FAILURE': {
                draft.checkedStockFailure.push(actions.payload.productId)
                break
            }
            default :{
                return draft
        }
        }
    })
}

export default cart