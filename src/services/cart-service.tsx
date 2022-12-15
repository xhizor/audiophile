import ProductItem from "../models/ProductItem";
import {Product} from "../interfaces/Product";
import {getLocalStorageData, setLocalStorageData} from "./localstorage-service";
import {Cart} from "../interfaces/Cart";

export const AUDIOPHILE_CART_KEY = 'audiophile-cart';

/**
 * Adds the product item to the cart.
 *
 * @param product
 * @param productQuantity
 */
export const addToCart = (product: Product, productQuantity: number) => {
    let cart: Cart = getLocalStorageData(AUDIOPHILE_CART_KEY, true);
    if (!cart) {
        cart = {
            cartItems: [],
            totalQuantity: 0,
            totalPrice: 0
        }
    }

    let productCart = cart.cartItems.find((p: ProductItem) => p.id === product.id);
    if (!productCart) {
        const productItem = new ProductItem(product);
        productItem.quantity = productQuantity;
        cart.cartItems = [...cart.cartItems, productItem];
    } else {
        productCart.quantity += productQuantity;
    }

    _calculateCartQuantityAndPrice(cart);
    setLocalStorageData(AUDIOPHILE_CART_KEY, cart);
};

/**
 * Gets the total quantity of the cart.
 *
 * @returns {number}
 */
export const getCartTotalQuantity = () => {
    let cart: Cart | null = getLocalStorageData(AUDIOPHILE_CART_KEY, true);
    if (!cart) return 0;

    return cart.totalQuantity;
};

/**
 * Calculates the total quantity and price of the cart items.
 *
 * @param cart
 * @private
 */
const _calculateCartQuantityAndPrice = (cart: Cart) => {
    const products = cart.cartItems;
    let totalQuantity = 0;
    let totalPrice = 0;

    products.forEach((product: ProductItem) => {
        totalQuantity += product?.quantity ?? 0;
        totalPrice += product?.quantity * product?.price ?? 0;
    });

    cart.totalQuantity = totalQuantity;
    cart.totalPrice = totalPrice;
};