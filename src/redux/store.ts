import { configureStore } from '@reduxjs/toolkit';
import { CartProductsSliceState } from '../interfaces/slices/cartProductsSlice.interface';
import { cartProductsSlice } from './cartRedux';

export const initialState: CartProductsSliceState =
  {
    cartProducts: [
      /*{
        id: '1',
        name: 'pizza',
        price: 12,
        amount: 1,
      },*/
    ],
  };

const store = configureStore({
  reducer: {
    cartProducts: cartProductsSlice.reducer,
  },
});

export default store;
