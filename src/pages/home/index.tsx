import React from "react";

import Layout from "../../components/layout";
import HomeHero from "./sections/home-hero";
import HomeProductCategories from "./sections/home-product-categories";
import HomeProductsSection from "./sections/home-products-section";
import HomeInfo from "./sections/home-info";

/**
 * Home page.
 *
 * @constructor
 */
const Home: React.FC = () => {
    return (
        <Layout>
            <HomeHero/>
            <HomeProductCategories/>
            <HomeProductsSection/>
            <HomeInfo/>
        </Layout>
    )
};

export default Home;