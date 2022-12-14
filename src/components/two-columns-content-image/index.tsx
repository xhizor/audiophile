import React from "react";

import ResponsiveImage from "../responsive-image";

interface TwoColumnsContentImageProps {
    title: string,
    description?: string,
    image: React.ReactElement<typeof ResponsiveImage>
}

/**
 * Two columns content image component.
 *
 * @constructor
 */
const TwoColumnsContentImage: React.FC<TwoColumnsContentImageProps> = ({title, description, image}: TwoColumnsContentImageProps) => {
    return (
        <div className="c-two-columns-content-image">
            <div className="c-two-columns-content-image__content">
                <h3 className="c-two-columns-content-image__content__title"
                    dangerouslySetInnerHTML={{__html: title}}/>
                <p className="c-two-columns-content-image__content__description">
                    {description}
                </p>
            </div>
            <div className="c-two-columns-content-image__photo">
                {image}
            </div>
        </div>
    )
};

export default TwoColumnsContentImage;