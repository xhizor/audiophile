import React from "react";
import {useParams} from 'react-router-dom';

import {isCategoryExist} from "../../../services/categories-service";
import {getProductsByCategory} from "../../../services/products-service";
import TwoColumnsContentImage
    from "../../../components/two-columns-content-image";
import ResponsiveImage from "../../../components/responsive-image";
import ButtonLink from "../../../components/button-link";

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
                            products.map((product: any, i) => {
                                const {id, name, description, slug, image} = product;
                                const imgPath = image?.desktop;
                                const imgArr = imgPath.split('/');
                                const imgLocation = imgArr[2];
                                const imgName = imgArr.at(-1);

                                return (
                                    <TwoColumnsContentImage
                                        key={id}
                                        title={name}
                                        description={description}
                                        image={
                                            <ResponsiveImage
                                                imgLocation={imgLocation}
                                                imgName={imgName}
                                                imgClass="product-category-products__container__products__item__img"
                                                imgAlt={name}
                                            />
                                        }
                                        btnLink={
                                            <ButtonLink
                                                title="See product"
                                                link={`/products/${category}/${slug}`}
                                                color="orange"
                                            />
                                        }
                                        reversed={i % 2 === 0}
                                        note={product.new ? 'New product' : ''}
                                    />
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