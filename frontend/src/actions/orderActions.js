import { createOrderFail, createOrderRequest, createOrderSuccess, orderDetailFail, orderDetailRequest, orderDetailSuccess, userOrdersFail, userOrdersRequest, userOrdersSuccess } from "../Slices/orderSlice"
import axios from 'axios'

export const createOrder = order => async(dispatch) => {
    try {
        dispatch(createOrderRequest())
        const {data} = await axios.post(`/api/v1/order/new`, order)
        dispatch(createOrderSuccess(data))
    } catch (error) {
        dispatch(createOrderFail(error.response.data.message))
        
    }
}

export const userOrders = order => async(dispatch) => {
    try {
        dispatch(userOrdersRequest())
        const {data} = await axios.get(`/api/v1/myorders` ,order)
        dispatch(userOrdersSuccess(data))
    } catch (error) {
        dispatch(userOrdersFail(error.response.data.message))
        
    }
}

export const orderDetail = id => async(dispatch) => {
    try {
        dispatch(orderDetailRequest())
        const {data} = await axios.get(`/api/v1/order/${id}`)
        dispatch(orderDetailSuccess(data))
    } catch (error) {
        dispatch(orderDetailFail(error.response.data.message))
        
    }
}