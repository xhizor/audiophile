import React from "react";
import {useNavigate, useParams} from "react-router-dom";

import {getProductBySlug} from "../../../services/products-service";
import TwoColumnsContentImage
    from "../../../components/two-columns-content-image";
import ResponsiveImage from "../../../components/responsive-image";
import ProductItem from "../../../models/ProductItem";
import {ProductExtraItem} from "../../../interfaces/Product";
import ButtonLink from "../../../components/button-link";
import NumberInput from "../../../components/number-input";

/**
 * Product info section of the product detail page.
 *
 * @constructor
 */
const ProductInfo: React.FC = () => {
    const {productSlug} = useParams();
    const navigate = useNavigate();

    const product = getProductBySlug(productSlug);
    if (!product) return null;

    const productItem = new ProductItem(product);
    const {name, description, image, isNew, price, features, includes, category, images} = productItem;

    /**
     * Navigates to a product details page based on the current category.
     */
    const goBack = ((e: React.MouseEvent) => {
        e.preventDefault();
        navigate(`/products/${category}`);
    });

    return (
        <section className="product-info">
            <div className="c-container">
                <div className="product-info__container">
                    <a href="#" className="product-info__container__back"
                       onClick={goBack}>
                        Go Back
                    </a>
                    <div className="product-info__container__inner">
                        <div
                            className="product-info__container__inner__overview">
                            <TwoColumnsContentImage
                                title={name}
                                image={
                                    <ResponsiveImage
                                        imgLocation={image?.imgLocation}
                                        imgName={image?.imgName}
                                        imgClass="product-info__container__inner__overview__img"
                                        imgAlt={name}/>
                                }
                                description={description}
                                inversed
                                note={isNew ? 'New product' : ''}
                            >
                                <div
                                    className="product-info__container__inner__overview__extra">
                                    <strong
                                        className="product-info__container__inner__overview__extra__price">
                                        $ {price.toLocaleString()}
                                    </strong>
                                    <div
                                        className="product-info__container__inner__overview__extra__cta">
                                        <NumberInput min={1} max={10}/>
                                        <ButtonLink title="Add to cart"
                                                    color="orange"
                                        />
                                    </div>
                                </div>
                            </TwoColumnsContentImage>
                        </div>
                        <div
                            className="product-info__container__inner__description">
                            <div
                                className="product-info__container__inner__description__features">
                                <h4 className="product-info__container__heading">
                                    Features
                                </h4>
                                <p className="product-info__container__inner__description__features__content"
                                   dangerouslySetInnerHTML={{__html: features}}/>
                            </div>
                            <div
                                className="product-info__container__inner__description__extra">
                                <h4 className="product-info__container__heading">
                                    In the box
                                </h4>
                                {includes?.length &&
                                <div
                                  className="product-info__container__inner__description__extra__items">
                                    {includes.map(({quantity, item}: ProductExtraItem, i) => (
                                        <div
                                            key={i}
                                            className="product-info__container__inner__description__extra__items__item">
                                            <span
                                                className="product-info__container__inner__description__extra__items__item__quantity">
                                                {quantity}x
                                            </span>
                                            <p className="product-info__container__inner__description__extra__items__item__name">
                                                {item}
                                            </p>
                                        </div>
                                    ))
                                    }
                                </div>
                                }
                            </div>
                        </div>

                        {images?.length && <div
                          className="product-info__container__inner__gallery">
                            {images.map((image: any, i) => (
                                <div
                                    key={i}
                                    className={`product-info__container__inner__gallery__photo product-info__container__inner__gallery__photo--${i + 1}`}>
                                    <ResponsiveImage
                                        imgLocation={image?.imgLocation}
                                        imgName={image?.imgName}
                                        imgClass="product-info__container__inner__gallery__photo__img"
                                        imgAlt={name}
                                    />
                                </div>
                            ))
                            }
                        </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ProductInfo;