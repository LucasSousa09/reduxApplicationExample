import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addProductToCartRequest } from "../store/modules/cart/actions"

import { IState } from "../store"
import { IProduct } from "../store/modules/cart/types"

import '../styles/catalog-item.scss'

interface CatalogItemProps {
    product: IProduct
}

export const CatalogItem: React.FC<CatalogItemProps> = ({product}) => {
    const dispatch = useDispatch() // Serve para que uma função seja executada dentro do Redux

    const doesNotHasStock = useSelector<IState, boolean>(state => {
        return state.cart.checkedStockFailure.includes(product.id)
    })

    const handleAddProductToCart = useCallback(() => {
        dispatch(addProductToCartRequest(product))
    }, [dispatch])

    return (
        <article className={`item-container ${doesNotHasStock && 'disable-container'}`} key={product.id}>
            <strong>{product.title}</strong>
            <span>{product.price.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</span>

            <button 
                type='button'
                onClick={handleAddProductToCart}
            >
                Comprar
            </button>

            {
                doesNotHasStock && <span>Falta de estoque</span>
            }
        </article>
    )
}