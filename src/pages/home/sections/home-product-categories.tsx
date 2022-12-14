import React from "react";

import ProductCategories from "../../../components/product-categories";

/**
 * Product categories section of the home page.
 *
 * @constructor
 */
const HomeProductCategories: React.FC = () => {
    return (
        <section className="home-product-categories">
            <div className="c-container">
                <ProductCategories/>
            </div>
        </section>
    )
};

export default HomeProductCategories;