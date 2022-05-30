export enum ActionTypes {
    addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
    addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
    addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE'
}

export interface ICartProduct {
    id: number,
    title: string,
    price: number,
}

export interface ICartItem {
    product: ICartProduct,
    quantity: number,
}

export interface ICartState {
    items: ICartItem[],
    failedStockCheck: number[],
}