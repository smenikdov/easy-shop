import ProductRating from "@/components/ProductRating.js";
import ProductCountChip from "@/components/ProductCountChip.js";
import Link from 'next/link'

const ProductsList = ({ products }) => {
    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
        >
            {products.map((product) => (
                <Link
                    href={`/${ product.id }`}
                    key={product.id}
                    className="relative bg-gray-800 shadow-md rounded-lg overflow-hidden"
                >
                    <ProductCountChip product={product} />

                    <img src={product.image} alt={product.title} className="w-full h-80 object-cover" />
                    <div className="p-4">
                        <h3 className="text-base font-semibold text-gray-300 line-clamp-2">
                            {product.title}
                        </h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                        <div className="flex justify-between">
                            <p className="text-gray-300 font-bold mt-2">${product.price}</p>
                            <ProductRating rating={product.rating.rate} />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProductsList;
