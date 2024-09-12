'use client';

import { useState, useEffect } from 'react';
import ProductsList from "@/components/ProductsList.js";

const BasketProducts = () => {
    const [products, setProducts] = useState([]);
    const getBasket = () => {
        const basket = JSON.parse(localStorage.getItem('basket') || '[]');
        return basket;
    };

    useEffect(() => {
        setProducts(getBasket());
    }, []);

    return (
        <div className="container mx-auto">
            {
                products.length === 0
                    ?
                    <div>
                        Nothing in your cart
                    </div>
                    :
                    <ProductsList products={products} />
            }
        </div>
    )
};

export default BasketProducts;
