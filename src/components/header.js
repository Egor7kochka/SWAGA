import React, { useState } from 'react';
import { HiShoppingBag } from "react-icons/hi2";
import Order from './order';

const showOrders = (props) => {
    let summa = props.orders.reduce((total, el) => total + Number.parseFloat(el.Price), 0);

    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.Id} item={el} />
            ))}
            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)} $</p>
        </div>
    );
};

const showNothing = () => (
    <div className='empty'>
        <h2>Товаров нет</h2>
    </div>
);

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div>
                <span className='logo'>Swaga Wear</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <HiShoppingBag 
                    onClick={() => setCartOpen(!cartOpen)} 
                    className={`shop-cart-button ${cartOpen ? 'active' : ''}`} 
                />

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    );
}