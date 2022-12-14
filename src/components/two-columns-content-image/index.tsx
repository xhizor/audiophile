import React from "react";

import ResponsiveImage from "../responsive-image";
import ButtonLink from "../button-link";

interface TwoColumnsContentImageProps {
    title: string,
    description?: string,
    image: React.ReactElement<typeof ResponsiveImage>,
    reversed?: boolean,
    note?: string,
    btnLink?: React.ReactElement<typeof ButtonLink>
}

/**
 * Two columns content image component.
 *
 * @param title
 * @param description
 * @param image
 * @param reversed
 * @param note
 * @param btnLink
 * @constructor
 */
const TwoColumnsContentImage: React.FC<TwoColumnsContentImageProps> = ({title, description, image, reversed, note, btnLink}: TwoColumnsContentImageProps) => {
    return (
        <div
            className={`c-two-columns-content-image ${reversed ? 'c-two-columns-content-image--inversed' : ''}`}>
            <div className="c-two-columns-content-image__content">
                {note &&
                <span className="c-two-columns-content-image__content__note">
                        {note}
                </span>
                }
                <h3 className="c-two-columns-content-image__content__title"
                    dangerouslySetInnerHTML={{__html: title}}/>
                <p className="c-two-columns-content-image__content__description">
                    {description}
                </p>
                <div className="c-two-columns-content-image__content__cta">
                    {btnLink}
                </div>
            </div>
            <div className="c-two-columns-content-image__photo">
                {image}
            </div>
        </div>
    )
};

export default TwoColumnsContentImage;