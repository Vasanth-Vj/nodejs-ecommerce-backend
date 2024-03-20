import axios from 'axios';
import { createReviewtFail, createReviewtRequest, createReviewtSuccess, productFail, productRequest, productSuccess } from '../Slices/ProductSlice';


export const getProduct = id => async (dispatch) => {

    try{
        dispatch(  productRequest())
      
        const {data} = await axios.get(`/api/v1/product/${id}`);
        dispatch(productSuccess(data))
        
    }catch(error){
        //handle error
        dispatch(productFail(error.response.data.message))
    }
}

export const createReview = reviewData => async (dispatch) => {

    try{
        dispatch(createReviewtRequest())
        const config = {
            headers : {
                'Content-type': 'application/json'
            }
        }
        const {data} = await axios.put(`/api/v1/review`, reviewData, config);
        dispatch(createReviewtSuccess(data))
        
    }catch(error){
        //handle error
        dispatch(createReviewtFail(error.response.data.message))
    }
}