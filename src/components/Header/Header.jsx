// src/components/Header.js
import React, { useState } from 'react';
import logoHeader from '../../assets/imgHeader/GroceryLogo.png';
import cart from '../../assets/imgHeader/cart.png';
import profile from '../../assets/imgHeader/profile.png';
import './header.css';
import { Cart } from '../Cart/Cart';

export function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logoHeader} alt="Logo" className='headerLogo'/>
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Product</li>
                    <li>Contact</li>
                </ul>
                <div className="actions">
                    <button onClick={toggleCart}>
                        <img src={cart} alt="Cart" />
                    </button>
                    <button>
                        <img src={profile} alt="Profile" />
                    </button>
                </div>
            </div>
            {isCartOpen && (
                <>
                    <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={closeCart}></div>
                    <Cart onClose={toggleCart} isOpen={isCartOpen} />
                </>
            )}
        </>
    );
}
