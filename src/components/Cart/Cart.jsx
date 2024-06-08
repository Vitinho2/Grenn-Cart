import React, { useContext } from 'react'
import { ContextCart } from './ContextCart'
import close from '../../assets/imgCart/close.png'
import trash from '../../assets/imgCart/trash.png'
import './Cart.css'

export function Cart({ onClose, isOpen }){

    const { cart, removeFromCart, updateQuantity } = useContext(ContextCart)

    const handleIncrease = (product) => {
        updateQuantity(product.id, product.quantity + 1)
    }

    const handleDecrease = (product) => {
        if(product.quantity > 1){
            updateQuantity(product.id, product.quantity - 1)
        }
    }

    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

    return(
        <>
            <div className={`cart-container ${isOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Carrinho</h2>
                    <button className='close-button' onClick={onClose}>
                        <img src={close} alt="close-image" />
                    </button>
                </div>

                <div className="productsCart">
                    {cart.map(product => (
                        <div className="card-product">
                            <img src={product.photo} alt="produto" />
                            <div className="infoProduct">
                                <p className="nameProduct">{product.name}</p>
                                <p className="priceProduct">R$ {product.price.toFixed(2)}</p>
                            </div>
                            <div className="quantityProduct">
                                <button className='buttonMore' onClick={() => handleDecrease(product)}> - </button>
                                <p className='counter'>{product.quantity}</p>
                                <button className='buttonLess' onClick={() => handleIncrease(product)}> + </button>
                            </div>
                            <div className="deleteProduct">
                                <button onClick={() => removeFromCart(product.id)}>
                                    <img src={trash} alt="trash" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="footer-cart">
                    <div className="price-products">
                        <p className='total-value'>Total R$</p>
                        <p>{totalPrice.toFixed(2)}</p>
                    </div>
                    <button className='buyProducts'>comprar</button>
                </div>
            </div>
        </>
    )
}