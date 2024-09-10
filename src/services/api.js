import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products';
const LIMIT = 12;

export const getProducts = async ({ page = 1, category = null } = {}) => {
    try {
        const response = await axios.get(`${BASE_URL}${ category ? `/category/${category}` : ''}`, {
            params: {
                page: page,
                limit: LIMIT,
            },
        });

        console.log(123, response.data);

        return {
            products: response.data || [],
            totalItems: parseInt(response.headers['x-total-count'], 10) || 0,
            totalPages: Math.ceil((parseInt(response.headers['x-total-count'], 10) || 0) / LIMIT),
            currentPage: page,
        };
    } catch (error) {
        console.error('Ошибка при получении товаров:', error);
        throw error;
    }
};

export const getProductById = async (productId) => {
    try {
        const response = await axios.get(`${BASE_URL}/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Ошибка при получении продукта с ID ${productId}:`, error);
        throw error;
    }
};

export const getCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/categories`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении категорий:', error);
        throw error;
    }
}
