import products from '../data/products.json';
import {Product} from "../interfaces/Product";

/**
 * Gets the products by a category.
 * Sorts the products by the property 'new'.
 *
 * @param category
 */
export const getProductsByCategory = (category: string | undefined): Product[] => {
    return products
        .filter(product => product.category === category)
        .sort((a, b) => Number(b.new) - Number(a.new));
};

/**
 * Gets the product by a slug if exists.
 *
 * @param slug
 */
export const getProductBySlug = (slug: string | undefined): Product | undefined => {
    return products.find(product => product.slug === slug);
};