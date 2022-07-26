/*ACTIONS*/
import { product } from '../interfaces/product.interface';
import {
  ADD_PRODUCT,
  CartActions,
  CartState,
  REMOVE_PRODUCT,
} from './cartProductTypes';
//states
import { ShoppingState } from './mainTypes';
import { initialState } from './store';
//toolkit
import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

//selectors
export const getCartProducts = (
  state: ShoppingState
): CartState => state.cartProducts;

//slices
export const cartProductsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addProduct: (
      state,
      action: PayloadAction<string>
    ) => {
      state.cartProducts = [
        ...state.cartProducts,
      ];
    },
    removeProduct: (
      state,
      action: PayloadAction<number>
    ) => {
      state.cartProducts =
        state.cartProducts.filter(
          ({ id }) => id !== action.payload
        );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct /*removeProduct*/ } =
  cartProductsSlice.actions;
