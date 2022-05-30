import { useCallback } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { IState } from "../store"
import { addProductToCartRequest } from "../store/modules/cart/actions"
import { ICartProduct } from "../store/modules/cart/types"

interface CatalogItemProps {
    product: ICartProduct
}

export const CatalogItem: React.FC<CatalogItemProps> = ({product}) => {
    const dispatch = useDispatch() // Serve para que uma função passe por dentro do redux
    
    const hasFailedStockCheck = useSelector<IState, boolean>(state => ( state.cart.failedStockCheck.includes(product.id) ))

    const handleAddProductToCart = useCallback(() => {
        dispatch(addProductToCartRequest(product))
    },[dispatch, product])

    return(
        <article>
            <strong>{product.title}</strong> {' - '}
            <span>{product.price}</span> {' '}

            <button 
                type='button'
                onClick={handleAddProductToCart}
            >
                    Comprar
            </button>
            {
                hasFailedStockCheck && <span style={{color: 'red'}}> Falta de estoque</span> 
            }
        </article>
    )
}