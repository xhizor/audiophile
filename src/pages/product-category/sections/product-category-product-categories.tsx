import React from "react";

import ProductCategories from "../../../components/product-categories";

/**
 * Product categories section of the product category page.
 *
 * @constructor
 */
const ProductCategoryProductCategories: React.FC = () => {
    return (
        <section className="product-category-product-categories">
            <div className="c-container">
                <ProductCategories/>
            </div>
        </section>
    )
};

export default ProductCategoryProductCategories;