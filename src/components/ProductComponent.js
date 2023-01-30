import React from 'react'
import {link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products)

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="col"  key ={id}>
        <Link to={`/product/${id}`} style={{textDecoration : "none"}}>
        <div className="card h-100" style={{ "width": "18rem"}}>
          <img className="card-img-top" src={image} alt="product" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"> $:{price}</p>
            <p className="card-text">{category}</p>
          </div>
        </div>
        </Link>
      </div>
    )
  })



  return (
    <>{renderList}</>
  )
};

export default ProductComponent