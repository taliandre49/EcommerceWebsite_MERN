import React, {useContext} from 'react';
import { ShopContext } from '../Context/ShopContext';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import { useParams } from 'react-router-dom';

export const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  console.log('params product ID', productId)
  const product = all_product.find((e) => e.id === Number(productId));
  console.log(product)
  return (
    <div>
      <Breadcrumbs product = {product} />
    </div>
  )
}

export default Product;
