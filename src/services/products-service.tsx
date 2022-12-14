import products from '../data/products.json';

/**
 * Gets the products by a category.
 * Sorts the products by the property 'new'.
 *
 * @param category
 */
export const getProductsByCategory = (category: string | undefined): Array<Object> => {
    return products
        .filter(product => product.category === category)
        .sort((a, b) => Number(b.new) - Number(a.new));
};