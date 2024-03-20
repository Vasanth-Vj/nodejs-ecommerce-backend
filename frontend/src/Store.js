import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "./Slices/ProductsSlice"; 
import productReducer from './Slices/ProductSlice';
import authReducer from './Slices/authSlice';
import cartReducer from './Slices/cartSlice';
import orderReducer from './Slices/orderSlice'

// Use configureStore and other Redux Toolkit utilities in your code

import {thunk}  from 'redux-thunk';
import { /* Other named exports from redux-thunk */ } from 'redux-thunk';

const reducer = combineReducers({
  // Your combined reducers go here

  productsState:productsReducer,
  productState:productReducer,
  authState:authReducer,
  cartState: cartReducer,
  orderState: orderReducer
});

const Store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk) // Using thunk middleware within configureStore
});

export default Store;
