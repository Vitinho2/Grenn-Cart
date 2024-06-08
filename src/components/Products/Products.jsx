import { ContextCart } from '../Cart/ContextCart';
import cart from '../../assets/imgHeader/cart.png';
import './Products.css'
import { useContext } from 'react';

export function Products(){

    const { addToCart } = useContext(ContextCart)

    let allProducts = [
        {
            id: 1,
            photo: '../../src/assets/imgProducts/alface.png',
            name: 'Alface',
            price: 5.99
        },
        {
            id: 2,
            photo: '../../src/assets/imgProducts/couve-flor.png',
            name: 'Couve-flor',
            price: 15.95
        },
        {
            id: 3,
            photo: '../../src/assets/imgProducts/repolho-roxo.png',
            name: 'Repolho Roxo',
            price: 12.99
        },
        {
            id: 4,
            photo: '../../src/assets/imgProducts/mamao-papaya.png',
            name: 'Mamão Papaya',
            price: 16.98
        },
        {
            id: 5,
            photo: '../../src/assets/imgProducts/tomate.png',
            name: 'Tomate',
            price: 10.98
        },
        {
            id: 6,
            photo: '../../src/assets/imgProducts/tomate-verde.png',
            name: 'Tomate Verde',
            price: 12.98
        },
        {
            id: 7,
            photo: '../../src/assets/imgProducts/soja.png',
            name: 'Soja',
            price: 20.50
        },
        {
            id: 8,
            photo: '../../src/assets/imgProducts/alho-poro.png',
            name: 'Alho Poro',
            price: 39.89
        },
        {
            id: 9,
            photo: '../../src/assets/imgProducts/castanha.png',
            name: 'Castanha',
            price: 23.99
        },
        {
            id: 10,
            photo: '../../src/assets/imgProducts/castanha-para.png',
            name: 'Castanha do Para',
            price: 71.16
        },
        {
            id: 11,
            photo: '../../src/assets/imgProducts/amendoim.png',
            name: 'Amemdoim',
            price: 34.29
        },
        {
            id: 12,
            photo: '../../src/assets/imgProducts/feijao-chines.png',
            name: 'Feijão Chines',
            price: 7.99
        },
        {
            id: 13,
            photo: '../../src/assets/imgProducts/pedaco-carne.png',
            name: 'Carne',
            price: 41.99
        },
        {
            id: 14,
            photo: '../../src/assets/imgProducts/coxa-frango.png',
            name: 'Coxa de Frango',
            price: 10.49
        },
        {
            id: 15,
            photo: '../../src/assets/imgProducts/peixe-fresco.png',
            name: 'peixe Fresco',
            price: 51.59
        },
        {
            id: 16,
            photo: '../../src/assets/imgProducts/mix-peixe.png',
            name: 'Mix de Peixes',
            price: 44.90
        },

    ]
    
    return(
        <>
            <div className="products">
                <h2>All Products</h2>
                <div className="container-products">
                    {allProducts.map(Products => (
                        <div key={Products.id} className="cardProduct">
                            <img src={Products.photo} alt={Products.name} />
                            <p className='nameProduct'>{Products.name}</p>
                            <p className='priceProduct'>RS$ {parseFloat(Products.price).toFixed(2)} Kg</p>
                            <button className='addCart' onClick={() => addToCart(Products)}>
                                <img src={cart} alt="" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}