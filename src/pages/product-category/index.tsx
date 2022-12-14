import React from "react";

import Layout from "../../components/layout";
import ProductCategoryHero from "./sections/product-category-hero";
import ProductCategoryProducts from "./sections/product-category-products";
import ProductCategoryProductCategories
    from "./sections/product-category-product-categories";
import AudioGearInfo from "../shared/audio-gear-info";

/**
 * Product category single page.
 *
 * @constructor
 */
const ProductCategory: React.FC = () => {
    return (
        <Layout>
            <ProductCategoryHero/>
            <ProductCategoryProducts/>
            <ProductCategoryProductCategories/>
            <AudioGearInfo/>
        </Layout>
    )
};

export default ProductCategory;