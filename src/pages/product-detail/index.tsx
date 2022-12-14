import React from "react";

import Layout from "../../components/layout";
import ProductInfo from "./sections/product-info";
import ProductItems from "./sections/product-items";
import ProductCategories from "../shared/product-categories";
import AudioGearInfo from "../shared/audio-gear-info";

/**
 * Product detail page.
 *
 * @constructor
 */
const ProductDetail: React.FC = () => {
    return (
        <Layout>
            <ProductInfo/>
            <ProductItems/>
            <ProductCategories/>
            <AudioGearInfo/>
        </Layout>
    )
};

export default ProductDetail;