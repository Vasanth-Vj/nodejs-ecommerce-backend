import { createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        product: {},
        isReviewSubmitted: false,
        isProductCreated: false
    },
    reducers: {
        productRequest(state, action) {
            return {
                ...state,
                loading: true

            }
        },

        productSuccess(state, action) {
            return {
                ...state,
                loading: false,
                product: action.payload.product
            }
        },

        productFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },

        createReviewtRequest(state, action) {
            return {
                ...state,
                loading: true

            }
        },

        createReviewtSuccess(state, action) {
            return {
                ...state,
                loading: false,
                isReviewSubmitted: true
            }
        },

        createReviewtFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },

        clearReviewtSubmitted(state, action) {
            return {
                ...state,
                isReviewSubmitted: false
            }
        },

        clearError(state, action) {
            return {
                ...state,
                error: null
            }
        },
        clearProduct(state, action) {
            return {
                ...state,
                product: {}
            }
        },


        newProductRequest(state, action) {
            return {
                ...state,
                loading: true

            }
        },

        newProductSuccess(state, action) {
            return {
                ...state,
                loading: false,
                product: action.payload.product,
                isProductCreated: true
            }
        },

        newProductFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload,
                isProductCreated: false
            }
        },
        clearProductCreated(state, action) {
            return {
                ...state,
                isProductCreated: false

            }
        },
    }


});

const { actions, reducer } = ProductSlice;

export const {
    productRequest,
    productSuccess,
    productFail,
    createReviewtRequest,
    createReviewtSuccess,
    createReviewtFail,
    clearReviewtSubmitted,
    clearError,
    clearProduct,
    newProductRequest,
    newProductSuccess,
    newProductFail,
    clearProductCreated
} = actions;

export default reducer;  