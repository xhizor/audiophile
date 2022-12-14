import React from "react";

import Layout from "../../components/layout";
import HomeHero from "./sections/home-hero";
import ProductCategories from "../shared/product-categories";
import HomeProductsSection from "./sections/home-products-section";
import AudioGearInfo from "../shared/audio-gear-info";

/**
 * Home page.
 *
 * @constructor
 */
const Home: React.FC = () => {
    return (
        <Layout>
            <HomeHero/>
            <ProductCategories/>
            <HomeProductsSection/>
            <AudioGearInfo/>
        </Layout>
    )
};

export default Home;