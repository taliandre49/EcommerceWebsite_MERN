import React, {useContext} from 'react';
import { ShopContext } from '../Context/ShopContext';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrumbs product = {product} />
      <ProductDisplay product = {product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product;
