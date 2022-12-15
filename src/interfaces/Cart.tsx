import ProductItem from "../models/ProductItem";

/**
 * Cart interface.
 */
export interface Cart {
    cartItems: ProductItem[],
    totalPrice: number,
    totalQuantity: number
}