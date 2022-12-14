import React from "react";
import {useParams} from 'react-router-dom';

import {getProductsByCategory} from "../../../services/products-service";
import TwoColumnsContentImage
    from "../../../components/two-columns-content-image";
import ResponsiveImage from "../../../components/responsive-image";
import ButtonLink from "../../../components/button-link";
import {Product} from "../../../interfaces/Product";
import ProductItem from "../../../models/ProductItem";

/**
 * Products section of the product category page.
 *
 * @constructor
 */
const ProductCategoryProducts: React.FC = () => {
    const {category} = useParams();
    const products = getProductsByCategory(category);
    if (!products?.length) return null;

    return (
        <section className="product-category-products">
            <div className="c-container">
                <div className="product-category-products__container">
                    <div
                        className="product-category-products__container__products">
                        {
                            products.map((product: Product, i) => {
                                const productItem = new ProductItem(product);
                                const {id, name, description, link, image, isNew} = productItem;

                                return (
                                    <div
                                        className="product-category-products__container__products__item"
                                        key={id}
                                    >
                                        <TwoColumnsContentImage
                                            title={name}
                                            description={description}
                                            image={
                                                <ResponsiveImage
                                                    imgLocation={image?.imgLocation}
                                                    imgName={image?.imgName}
                                                    imgClass="product-category-products__container__products__item__img"
                                                    imgAlt={name}
                                                />
                                            }
                                            btnLink={
                                                <ButtonLink
                                                    title="See product"
                                                    link={link}
                                                    color="orange"
                                                />
                                            }
                                            inversed={i % 2 === 0}
                                            note={isNew ? 'New product' : ''}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ProductCategoryProducts;