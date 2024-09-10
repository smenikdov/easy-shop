'use client';

import React, { useState, useEffect } from 'react';
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
            <ProductsList products={products} />
        </div>
    )
};

export default BasketProducts;
