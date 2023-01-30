import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { fetchProducts} from '../redux/action/ProductAction'
import { useDispatch, useSelector } from 'react-redux'

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  return (

    <div className="row row-cols-1 row-cols-md-2 row-cols-md-3 g-4">
      <ProductComponent />
    </div>
  )
}

export default ProductListing