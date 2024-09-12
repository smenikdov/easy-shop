import ProductRating from "@/components/ProductRating.js";
import AddToBasketButton from "@/components/AddToBasketButton.js";
import { getProductById } from "@/services/api.js";
import '@/styles/card.scss';

export default async function Page({ params }) {
    const product = await getProductById(+params.id);

    return (
        <div className="container mx-auto">
            <div
                className="card relative flex mx-auto bg-gray-800 shadow-md rounded-lg"
                style={{
                    width: '50vw',
                }}
            >
                <img
                    className="w-full object-cover rounded-lg"
                    style={{
                        height: '61vh',
                        width: '25vw',
                    }}
                    src={product.image}
                    alt={product.title}
                />
                <div className="p-6">
                    <div className="flex items-center justify-end mb-4">
                        <ProductRating rating={product.rating.rate} />
                        <p className="text-gray-500 font-bold ml-2">({product.rating.count})</p>
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                        {product.title}
                    </h2>
                    <p className="text-gray-300 mb-4">
                        Категория: {product.category}
                    </p>
                    <p className="text-xl text-white">
                        Цена: ${product.price}
                    </p>
                    <div className="mt-3">
                        <AddToBasketButton product={product} />
                    </div>

                    <p className="text-gray-300 mt-4">
                        {product.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
