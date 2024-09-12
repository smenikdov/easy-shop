import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
// https://react-icons.github.io/react-icons/icons/fa/

const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating); // Количество полных звезд
    const hasHalfStar = rating % 1 !== 0; // Половина звезды
    const emptyStars = 5 - Math.ceil(rating); // Количество пустых звезд

    return (
        <div className="flex">
            {Array.from({ length: fullStars }).map((_, index) => (
                <FaStar key={index} className="text-yellow-400 w-6 h-6" />
            ))}

            {hasHalfStar && <FaStarHalfAlt className="text-yellow-400 w-6 h-6" />}

            {Array.from({ length: emptyStars }).map((_, index) => (
                <FaRegStar key={index} className="text-gray-300 w-6 h-6" />
            ))}
        </div>
    );
};

export default Rating;

