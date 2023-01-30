import {combineReducers} from 'redux';
import { productReducer, selectedProduct } from './productReduce';

const reducers = combineReducers({
   allProducts : productReducer,
   product : selectedProduct,
})

export default reducers
