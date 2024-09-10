import Image from "next/image";
import Link from 'next/link'
import { FaTh, FaShoppingBasket } from "react-icons/fa";

const Footer = ({}) => {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="/"
            >
                <FaTh />
                Catalog
            </Link>
            <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="/basket"
            >
                <FaShoppingBasket />
                Basket
            </Link>
        </footer>
    );
};

export default Footer;
