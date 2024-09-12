import ProductsList from "@/components/ProductsList.js";
import CategoryFilter from "@/components/CategoryFilter.js";
import Pagination from "@/components/Pagination.js";
import { getProducts, getCategories } from "@/services/api.js";

export default async function Home({ searchParams }) {
    const categories = await getCategories();
    const page = +searchParams.page || 1;

    let category;
    if (categories.includes(searchParams.category)) {
        category = searchParams.category;
    } else {
       category = null; 
    }

    const { products, totalPages } = await getProducts({ category, page });

    return (
        <div className="container mx-auto">
            <CategoryFilter
                items={[ 'all', ...categories ]}
            />

            <ProductsList products={products} />
            <Pagination totalPages={totalPages} className="mt-8" />
        </div>
    );
}
