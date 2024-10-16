import { createSlice } from "@reduxjs/toolkit";

var initialState = {
    data: []
}

const CartSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.data.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state, data: state.data.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
                }
            }
            return {
                ...state, data: [...state.data, { ...action.payload, quantity: 1 }]
            }
        },
        removeToCart: (state, action) => {
            return {
                ...state, data: state.data.filter(item => item.id !== action.payload.id)
            }
        },
        removeToQuantity: (state, action) => {
            return {
                ...state, data: state.data.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1}: item).filter(item => item.quantity > 0)
            }
        }
    }
})

export const { addToCart, removeToCart, removeToQuantity } = CartSlice.actions

export default CartSlice.reducer