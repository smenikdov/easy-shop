'use client';

import '@/styles/header.scss';
import { FaTh, FaShoppingBasket } from "react-icons/fa";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();
    const [isActiveAnim1, setIsActiveAnim1]  = useState(false);
    const [isActiveAnim2, setIsActiveAnim2]  = useState(false);
    const [isActiveAnim3, setIsActiveAnim3]  = useState(false);
    const [isActiveAnim4, setIsActiveAnim4]  = useState(false);

    const goTo = (path) => {
        router.push(path);
    };

    return (
        <>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" width="0" height="0">
                <defs>
                    <path id="circlePath" d="M 150, 150 m -50, 0 a 50,50 0 0,1 100,0 a 50,50 0 0,1 -100,0" />
                </defs>
            </svg>

            <nav>
                <button
                    type="button"
                    className={isActiveAnim1 ? 'anim-active' : ''}
                    onMouseEnter={() => setIsActiveAnim1(true)}
                    onMouseLeave={() => setIsActiveAnim1(false)}
                    onClick={() => goTo('/')}
                >
                    <span className="text">Catalog</span>
                    <FaTh className="icon" />
                    <svg className="circle" viewBox="0 0 300 300" aria-hidden="true">
                        <g>
                            <text fill="currentColor">
                                <textPath href="#circlePath">Catalog</textPath>
                            </text>
                            <text fill="currentColor">
                                <textPath href="#circlePath" startOffset="50%">Catalog</textPath>
                            </text>
                        </g>
                    </svg>
                </button>
                <button
                    type="button"
                    className={isActiveAnim2 ? 'anim-active' : ''}
                    onMouseEnter={() => setIsActiveAnim2(true)}
                    onMouseLeave={() => setIsActiveAnim2(false)}
                    onClick={() => goTo('/basket')}
                >
                    <span className="text">Basket</span>
                    <FaShoppingBasket className="icon" />
                    <svg className="circle" viewBox="0 0 300 300" aria-hidden="true">
                        <g>
                            <text fill="currentColor">
                                <textPath href="#circlePath">Basket</textPath>
                            </text>
                            <text fill="currentColor">
                                <textPath href="#circlePath" startOffset="50%">Basket</textPath>
                            </text>
                        </g>
                    </svg>
                </button>
            </nav>
        </>
    );
};

export default Header;
