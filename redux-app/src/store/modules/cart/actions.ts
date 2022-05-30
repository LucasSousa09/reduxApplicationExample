import { ActionTypes, ICartProduct } from "./types";

export function addProductToCartRequest(product: ICartProduct) {
    return {
        type: ActionTypes.addProductToCartRequest,
        payload: {
            product,
        }
    }
}

export function addProductToCartSuccess(product: ICartProduct) {
    return {
        type: ActionTypes.addProductToCartSuccess,
        payload: {
            product,
        }
    }
}

export function addProductToCartFailure(productId: number) {
    return {
        type: ActionTypes.addProductToCartFailure,
        payload: {
            productId,
        }
    }
}