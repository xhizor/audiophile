export interface ProductImage {
    desktop: string,
    tablet?: string,
    mobile?: string
}

export interface ProductGallery {
    first: ProductImage,
    second: ProductImage,
    third: ProductImage
}

export interface ProductExtraItem {
    quantity: number,
    item: string
}

export interface ProductOtherItems {
    image: ProductImage,
    name: string,
    slug: string
}

export interface Product {
    id: number,
    slug: string,
    name: string,
    image: ProductImage,
    category: string,
    categoryImage: ProductImage,
    new: boolean,
    price: number,
    description: string,
    features: string,
    includes: ProductExtraItem[],
    gallery: ProductGallery,
    others: ProductOtherItems[]
}