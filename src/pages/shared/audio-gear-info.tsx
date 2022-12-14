import React from "react";

import TwoColumnsContentImage
    from "../../components/two-columns-content-image";
import ResponsiveImage from "../../components/responsive-image";

/**
 * Audio gear info section.
 * It's used on the home page, product category page and single product page.
 *
 * @constructor
 */
const AudioGearInfo: React.FC = () => {
    return (
        <section className="audio-gear-info">
            <div className="c-container">
                <div className="audio-gear-info__container">
                    <TwoColumnsContentImage
                        title="Bringing you the <span>best</span> audio gear"
                        description="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
                        image={
                            <ResponsiveImage
                                imgLocation="shared"
                                imgName="image-best-gear.jpg"
                                imgClass="c-two-columns-content-image__photo__img"
                                imgAlt="Best gear"
                            />
                        }
                    />
                </div>
            </div>
        </section>
    )
};

export default AudioGearInfo;