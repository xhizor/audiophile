import React from "react";
import {useParams} from "react-router-dom";

import {getProductBySlug} from "../../../services/products-service";
import ResponsiveImage from "../../../components/responsive-image";
import ProductItem from "../../../models/ProductItem";
import ButtonLink from "../../../components/button-link";

/**
 * Product items section of the product detail page.
 *
 * @constructor
 */
const ProductItems: React.FC = () => {
    const {productSlug} = useParams();

    const product = getProductBySlug(productSlug);
    if (!product) return null;

    const productItem = new ProductItem(product);
    const featuredProducts = productItem.featuredItems;

    return (
        <section className="product-items">
            <div className="c-container">
                <div className="product-items__container">
                    <h4 className="product-items__container__title">
                        You may also like
                    </h4>
                    {
                        featuredProducts?.length &&
                        <div className="product-items__container__list">
                            {
                                featuredProducts.map(({name, slug, link, imgName, imgLocation}: any) => (
                                    <div
                                        key={slug}
                                        className="product-items__container__list__item">
                                        <ResponsiveImage
                                            imgLocation={imgLocation}
                                            imgName={imgName}
                                            imgClass="product-items__container__list__item__img"
                                            imgAlt={name}
                                        />
                                        <strong
                                            className="product-items__container__list__item__name">
                                            {name}
                                        </strong>
                                        <ButtonLink
                                            title="See product"
                                            link={link}
                                            color="orange"
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        </section>
    )
};

export default ProductItems;