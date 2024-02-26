import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        },
        removeFromCart(state, action) {
            return state.filter(item => item.id !== action.payload)
        },
        resetCart() {
            return initialState;
        }
    }
})
export const {addToCart, removeFromCart, resetCart} = cart.actions;
export default cart.reducer;