import products from '../data/products.json';

/**
 * Checks if a given category exists in products data.
 *
 * @param category
 */
export const isCategoryExist = (category: string | undefined): boolean => {
    return products.some(p => p.category === category);
};
