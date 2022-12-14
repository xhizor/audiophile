import React from "react";

import ButtonLink from "../../../components/button-link";
import ResponsiveImage from "../../../components/responsive-image";

/**
 * Hero section of the home page.
 *
 * @constructor
 */
const HomeHero: React.FC = () => {
    return (
        <section className="home-hero">
            <div className="c-container">
                <div className="home-hero__container">
                    <div className="home-hero__container__photo">
                        <ResponsiveImage
                            imgLocation="home"
                            imgName="image-hero.jpg"
                            imgClass="home-hero__container__photo__img"
                            imgAlt="Hero"
                        />
                    </div>
                    <div className="home-hero__container__content">
                        <p className="home-hero__container__content__type">
                            New product
                        </p>
                        <h1 className="home-hero__container__content__title">
                            XX99 Mark II HeadphoneS
                        </h1>
                        <p className="home-hero__container__content__description">
                            Experience natural, lifelike audio and exceptional
                            build quality made for the passionate music
                            enthusiast.
                        </p>
                        <ButtonLink
                            title="See product"
                            link="/products/headphones/xx99-mark-two-headphones"
                            color="orange"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HomeHero;