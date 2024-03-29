import React, { useEffect, useState } from 'react'
import api from '../services/api'

import { CatalogItem } from './CatalogItem'
import { ICartProduct } from '../store/modules/cart/types'

export const Catalog: React.FC = () => {
   
    const [catalog, setCatalog] = useState<ICartProduct[]>([])

    useEffect(() => {
        api.get('products').then(
            response => setCatalog(response.data)
        )
    },[])
    
    return (
        <main>
            <h1>Catalog</h1>
            {
                catalog.map(product => (
                    <CatalogItem key={product.id} product={product} />
                ))
            }
        </main>
    )
}