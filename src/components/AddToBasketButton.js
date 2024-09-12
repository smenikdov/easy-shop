'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from "@/components/Button.js";

const AddToBasketButton = (props) => {
    const { product } = props;
    const router = useRouter();
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


    const handleAdd = () => {
        setCount(1);
        const basket = getBasket();
        basket.push({ ...product, count: 1 });
        localStorage.setItem('basket', JSON.stringify(basket));
    };

    const handleGoToBasket = () => {
        router.push('/basket');
    };

    const handleChange = (changer) => {
        const newCount = count + changer;
        setCount(newCount);
        let basket = getBasket();
        const item = basket.find(item => +item.id === +product.id);
        item.count = newCount;
        if (item.count === 0) {
            basket = basket.filter(item => +item.id !== +product.id);
        }
        localStorage.setItem('basket', JSON.stringify(basket));
    };

    const Add = () => (
        <Button onClick={handleAdd}>
            Add to basket 
        </Button>
    );

    const Change = () => (
        <div className="flex justify-between items-center">
            <Button onClick={() => handleChange(-1)}>
                -
            </Button>
            <div className="text-bold">
                {count}
            </div>
            <Button onClick={() => handleChange(+1)}>
                +
            </Button>
            <Button onClick={() => handleGoToBasket()}>
                Go to basket
            </Button>
        </div>
    );

    return count > 0 ? <Change /> : <Add />;
};

export default AddToBasketButton;


