import React from "react";

import ButtonLink from "../../../components/button-link";
import ResponsiveImage from "../../../components/responsive-image";
import patternCircleIcon from "../../../assets/images/icons/pattern-circles.svg"

/**
 * Products section of the home page.
 *
 * @constructor
 */
const HomeProductsSection: React.FC = () => {
    return (
        <section className="home-products">
            <div className="c-container">
                <div className="home-products__container">
                    <FeaturedProduct/>
                    <ProductCard/>
                    <ProductTwoColumns/>
                </div>
            </div>
        </section>
    )
};

/**
 * Featured product component.
 *
 * @constructor
 */
const FeaturedProduct: React.FC = () => {
    return (
        <div className="home-products__featured-product">
            <div
                className="home-products__featured-product__decoration">
                <img src={patternCircleIcon}
                     alt="Circle pattern"
                     className="home-products__featured-product__decoration__img"/>
            </div>
            <div className="home-products__featured-product__inner">
                <div
                    className="home-products__featured-product__inner__photo">
                    <ResponsiveImage
                        imgLocation="home"
                        imgName="image-speaker-zx9.png"
                        imgClass="home-products__featured-product__inner__photo__img"
                        imgAlt="Speaker ZX9"
                    />
                </div>
                <div
                    className="home-products__featured-product__inner__content">
                    <h2 className="home-products__featured-product__inner__content__name">
                        ZX9 Speaker
                    </h2>
                    <p className="home-products__featured-product__inner__content__description">
                        Upgrade to premium speakers that are phenomenally built
                        to deliver truly remarkable sound.
                    </p>
                    <ButtonLink
                        link="/products/speakers/zx9-speaker"
                        title="See product"
                        color="black"
                    />
                </div>
            </div>
        </div>
    )
};

/**
 * Product card component.
 *
 * @constructor
 */
const ProductCard: React.FC = () => {
    return (
        <div className="home-products__product-card">
            <div className="home-products__product-card__content">
                <h3 className="home-products__product-card__content__name">
                    ZX7 Speaker
                </h3>
                <ButtonLink
                    title="See product"
                    link="/products/speakers/zx7-speaker"
                />
            </div>
            <div className="home-products__product-card__photo">
                <ResponsiveImage
                    imgLocation="home"
                    imgName="image-speaker-zx7.jpg"
                    imgClass="home-products__product-card__photo__img"
                    imgAlt="Speaker ZX7"
                />
            </div>
        </div>
    );
};

/**
 * Product two columns component.
 *
 * @constructor
 */
const ProductTwoColumns: React.FC = () => {
    return (
        <div className="home-products__product-two-columns">
            <div className="home-products__product-two-columns__photo">
                <ResponsiveImage
                    imgLocation="home"
                    imgName="image-earphones-yx1.jpg"
                    imgClass="home-products__product-two-columns__photo__img"
                    imgAlt="Earphones YX1"
                />
            </div>
            <div className="home-products__product-two-columns__content">
                <h3 className="home-products__product-two-columns__content__name">
                    YX1 Earphones
                </h3>
                <ButtonLink
                    title="See product"
                    link="/products/earphones/yx1-earphones"
                />
            </div>
        </div>
    )
};

export default HomeProductsSection;