'use client'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showCart: false,
    showMobileMenu: false,

    xx99m2ItemCount: 0,
    xx99m1ItemCount: 0,
    xx59ItemCount: 0,

    zx9ItemCount: 0,
    zx7ItemCount: 0,
    yx1ItemCount: 0,

    totalItems: 0,
    totalBill: 0,
};


const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        toggleCart(state){
            state.showCart = !state.showCart;
        },
        toggleMobileMenu(state){
            state.showMobileMenu = !state.showMobileMenu;
        },
    },
});


export const { toggleCart, toggleMobileMenu } = projectsSlice.actions;

export default projectsSlice.reducer;