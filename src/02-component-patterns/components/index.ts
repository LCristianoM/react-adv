import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProdutCardHOCProps } from '../interfaces/interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProdutCardHOCProps = Object.assign(ProductCardHOC, {
	Title: ProductTitle,
	Image: ProductImage,
	Buttons: ProductButtons,
});


export default ProductCard;