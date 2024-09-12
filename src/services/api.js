import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products';
const LIMIT = 12;

export const getProducts = async ({ page = 1, category = null } = {}) => {
    try {
        const response = await axios.get(`${BASE_URL}${ category ? `/category/${category}` : ''}`, {
            params: {},
        });

        const data = response.data || [];
        return {
            products: data.slice(LIMIT * (page - 1), LIMIT * page),
            totalPages: Math.ceil(data.length / LIMIT),
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
