import { useEffect, useState } from "react"
import { IProduct } from "../store/modules/cart/types"

import api from '../services/api'
import { CatalogItem } from "./CatalogItem"

import '../styles/catalog.scss'

export function Catalog(){
    const [catalog, setCatalog] = useState<IProduct[]>([])
    
    useEffect(() => {
        api.get('products')
        .then( response => setCatalog(response.data))
    },[])


    return (
        <main className='main-container'>
            <h1>Catalog</h1>
            <div className='catalog-container'>
                {
                    catalog.map(product => (
                        <CatalogItem key={product.id} product={product}/>
                    ))
                }
            </div>
        </main>
    )
}