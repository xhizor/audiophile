import React from "react";

import Layout from "../../components/layout";
import ProductCategoryHero from "./sections/product-category-hero";
import ProductCategoryProducts from "./sections/product-category-products";
import ProductCategories from "../shared/product-categories";
import AudioGearInfo from "../shared/audio-gear-info";

/**
 * Product category page.
 *
 * @constructor
 */
const ProductCategory: React.FC = () => {
    return (
        <Layout>
            <ProductCategoryHero/>
            <ProductCategoryProducts/>
            <ProductCategories/>
            <AudioGearInfo/>
        </Layout>
    )
};

export default ProductCategory;