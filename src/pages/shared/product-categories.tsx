import React from "react";
import {Link} from "react-router-dom";

import {productCategories} from "../../data/product-categories";
import arrowIcon from '../../assets/images/icons/icon-arrow-right.svg';
import ProductCategory from "../../interfaces/ProductCategory";

/**
 * Product categories section.
 *
 * @constructor
 */
const ProductCategories: React.FC = () => {
    return (
        <section className="product-categories">
            <div className="c-container">
                <div className="product-categories__list">
                    {
                        productCategories?.length && productCategories.map((productCategory: ProductCategory) => {
                            const {id, name, link, imgPath} = productCategory;

                            return (
                                <Link
                                    key={id}
                                    to={link}
                                    className="product-categories__list__item">
                                    <img
                                        src={require(`../../assets/images/${imgPath}`)}
                                        alt={`${name} category`}
                                        className={`product-categories__list__item__image product-categories__list__item__image--${id}`}
                                    />
                                    <strong
                                        className="product-categories__list__item__name">
                                        {name}
                                    </strong>
                                    <div
                                        className="product-categories__list__item__cta">
                                        <strong
                                            className="product-categories__list__item__cta__text">
                                            Shop
                                        </strong>
                                        <img src={arrowIcon}
                                             alt=" Shop arrow icon"
                                             className="product-categories__list__item__cta__icon"/>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
};

export default ProductCategories;