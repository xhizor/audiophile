import {
    Product,
    ProductExtraItem,
    ProductGallery,
    ProductOtherItems
} from "../interfaces/Product";

/**
 * Product item class.
 */
class ProductItem {
    id: number;
    name: string;
    description: string;
    slug: string;
    link: string;
    price: number;
    image: any;
    isNew: boolean;
    features: string;
    includes: ProductExtraItem[];
    category: string;
    images: {}[] = [];
    featuredItems: {}[] = [];

    /**
     *
     * @param product
     */
    constructor(product: Product) {
        this.id = product.id;
        this.name = product.name;
        this.description = product.description;
        this.slug = product.slug;
        this.link = `/products/${product.category}/${product.slug}`;
        this.price = product.price;
        this.isNew = product.new;
        this.features = product.features.replace(/\n/g, '<br />');
        this.includes = product.includes;
        this.category = product.category;

        this.image = this._getImageProps(product?.image?.desktop)
        this.images = this._getGalleryImages(product.gallery);
        this.featuredItems = this._getFeaturedItems(product.others, product.category);
    }

    /**
     * Gets the gallery images.
     *
     * @param gallery
     * @private
     */
    _getGalleryImages(gallery: ProductGallery) {
        const images: {}[] = [];
        const galleryImages = [
            gallery?.first?.desktop,
            gallery?.second?.desktop,
            gallery?.third?.desktop
        ];

        galleryImages.forEach(imgPath => {
            images.push(this._getImageProps(imgPath));
        });

        return images;
    }

    /**
     * Gets the featured items.
     *
     * @param otherProducts
     * @param category
     * @private
     */
    _getFeaturedItems(otherProducts: ProductOtherItems[], category: string): {}[] {
        const featuredItems: {}[] = [];

        otherProducts.forEach(({name, slug, image}: any) => {
            featuredItems.push({
                    name,
                    slug,
                    link: `/products/${category}/${slug}`,
                    ...this._getImageProps(image.desktop),
                }
            );
        });

        return featuredItems;
    }

    /**
     * Gets image props for our ResponsiveImage component.
     *
     * @param imgPath
     * @private
     */
    _getImageProps(imgPath: string) {
        const splittedPath = imgPath.split('/');

        return {
            imgName: splittedPath.at(-1),
            imgLocation: splittedPath[2]
        }
    }
}

export default ProductItem;