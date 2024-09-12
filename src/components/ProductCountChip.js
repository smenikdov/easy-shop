'use client';

import { useState, useEffect } from 'react';
import Chip from '@/components/Chip.js';
import Link from 'next/link'

const ProductCountChip = (props) => {
    const { product } = props;
    const [count, setCount] = useState(0);

    const getBasket = () => {
        const basket = JSON.parse(localStorage.getItem('basket') || '[]');
        return basket;
    };

    useEffect(() => {
        const basket = getBasket();
        const item = basket.find(item => +item.id === +product.id);
        setCount((item ? +item.count : 0) || 0);
    }, [ product ]);

    if (count === 0) {
        return null;
    }

    return (
        <Link
            href="/basket"
        >
            <Chip
                label={`${count} in basket`}
                className="absolute top-2 right-2"
            />
        </Link>
    );
};

export default ProductCountChip;
