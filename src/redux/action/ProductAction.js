import FakeStoreApi from "../../apis/FakeStoreApi"
import { ActionTypes } from "../constant/actionTypes"

export const fetchProducts = () => async (dispatch) => {
        const res = await FakeStoreApi.get("./products")
        dispatch({type: ActionTypes.FETCH_PRODUCTS, payload:res.data})
    }
export const fetchProduct = (id) => async(dispatch) => {
    const res = await FakeStoreApi.get(`/products/${id}`)
    dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: res.data})

} 

export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    }
}

export const selectedProduct = (product) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload : product
    }
}

export const removeSelectedProduct = ()=>{
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCTS,
    }
}