import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedProduct, fetchProduct} from '../redux/action/ProductAction';

const ProductDetail = () => {

    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();

    
    useEffect(() => {
        if (productId && productId !== "") dispatch(fetchProduct(productId));
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);

    const { image, title, price, category, description } = product;

    return (
        <div className='grid container'>
            {Object.keys(product).length === 0 ? (<div> ...loading</div>) :(
            <div className="card mb-3" style={{"max-width": "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="product" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>                            
                            <p className="card-text">{description}</p>                
                            <p className="card-text"> ${price}</p>
                            <p className="card-text"><small className="text-muted"> {category}</small></p>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default ProductDetail