import React from "react";

interface ResponsiveImageProps {
    imgLocation: string,
    imgName: string,
    imgClass: string,
    imgAlt: string
}

interface ResponsiveImageType {
    desktop: string | null,
    tablet: string | null,
    mobile: string | null
}

/**
 *
 * @param imgLocation
 * @param imgName
 * @param imgClass
 * @param imgAlt
 * @constructor
 */
const ResponsiveImage: React.FC<ResponsiveImageProps> = ({imgLocation, imgName, imgClass, imgAlt}: ResponsiveImageProps) => {
    const image: ResponsiveImageType = {
        desktop: null,
        tablet: null,
        mobile: null
    };

    try {
        image.desktop = require(`../../assets/images/${imgLocation}/desktop/${imgName}`);
    } catch (err) {
    }

    if (!image.desktop) return null;

    try {
        image.tablet = require(`../../assets/images/${imgLocation}/tablet/${imgName}`);
    } catch (err) {
        image.tablet = image.desktop;
    }

    try {
        image.mobile = require(`../../assets/images/${imgLocation}/mobile/${imgName}`);
    } catch (err) {
        image.mobile = image.tablet ?? image.desktop;
    }

    return (
        <picture>
            <source
                media="(max-width: 500px)"
                srcSet={`${image.mobile} 500w`}
                sizes="500px"
            />
            <source
                media="(max-width: 840px)"
                srcSet={`${image.tablet} 840w`}
                sizes="840px"
            />
            <img
                src={image.desktop}
                className={imgClass}
                alt={imgAlt}
                draggable={false}
            />
        </picture>
    )
};

export default ResponsiveImage;