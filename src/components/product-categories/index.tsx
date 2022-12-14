import React from "react";
import {Link} from "react-router-dom";

import {productCategories} from "../../data/product-categories";
import arrowIcon from '../../assets/images/icons/icon-arrow-right.svg';
import ProductCategory from "../../interfaces/ProductCategory";

/**
 * Product categories component.
 *
 * @constructor
 */
const ProductCategories: React.FC = () => {
    return (
        <div className="c-product-categories">
            {
                productCategories?.length && productCategories.map((productCategory: ProductCategory) => {
                    const {id, name, link, imgPath} = productCategory;

                    return (
                        <Link
                            key={id}
                            to={link}
                            className="c-product-categories__item">
                            <img
                                src={require(`../../assets/images/${imgPath}`)}
                                alt={`${name} category`}
                                className={`c-product-categories__item__image c-product-categories__item__image--${id}`}
                            />
                            <strong
                                className=" c-product-categories__item__name">
                                {name}
                            </strong>
                            <div className=" c-product-categories__item__cta">
                                <strong
                                    className="
                                c-product-categories__item__cta__text">
                                    Shop
                                </strong>
                                <img src={arrowIcon} alt=" Shop arrow icon"
                                     className="
                                c-product-categories__item__cta__icon"/>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
};

export default ProductCategories;