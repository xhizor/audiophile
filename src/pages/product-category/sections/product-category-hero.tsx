import React from "react";
import {useParams} from 'react-router-dom';
import {isCategoryExist} from "../../../services/categories-service";

/**
 * Hero section of the product category page.
 *
 * @constructor
 */
const ProductCategoryHero: React.FC = () => {
    const {category} = useParams();

    return (
        <section
            className={`product-category-hero ${!isCategoryExist(category) ? 'no-category' : ''}`}>
            <div className="c-container">
                <div className="product-category-hero__container">
                    <h1 className="product-category-hero__container__title">
                        {isCategoryExist(category) ? category : ''}
                    </h1>
                </div>
            </div>
        </section>
    )
};

export default ProductCategoryHero;