import React from 'react'
import Product from './Product'

const ListProducts = () => {
    // const names = ['Robin Hood', 'Robin Hood Sr.', 'Robin Hood Jr.'];
    // return names.map(name => <h1 key={name}>{name}</h1>)
    const products = [
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack",
            "price": 109.95,
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",

        },
        {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        },
    ]

    return products.map(product => <Product key={product.id} product={product} />)
}

export default ListProducts