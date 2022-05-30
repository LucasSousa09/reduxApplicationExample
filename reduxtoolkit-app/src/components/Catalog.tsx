import { useEffect, useState } from "react"
import { IProduct } from "../store/modules/cart/types"

import api from '../services/api'
import { CatalogItem } from "./CatalogItem"

import '../styles/catalog.scss'

export function Catalog(){
    const [catalog, setCatalog] = useState<IProduct[]>([])
    
    useEffect(() => {
        api.get('products')
        .then( response => response.data)
        .then( data => {
            const formatedData = data.map((catalogItem: IProduct) => {
                return {
                    id: catalogItem.id,
                    title: catalogItem.title,
                    price: catalogItem.price.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
                }
            })

            setCatalog(formatedData)
        })
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