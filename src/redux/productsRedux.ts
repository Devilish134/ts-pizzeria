/*ACTIONS*/
import { product } from '../interfaces/product.interface';
import {
  ADD_PRODUCT,
  CartActions,
  CartState,
  REMOVE_PRODUCT,
} from './cartProductTypes';
//states
import {
  ShoppingState,
  ShopState,
} from './mainTypes';
import { ProductsState } from './productsTypes';
//slices
import { ProductsSliceState } from '../interfaces/slices/productsSlice.interface';
import { CartProductsSliceState } from '../interfaces/slices/cartProductsSlice.interface';
//toolkit
import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

export const getAllProducts = (
  state: ShopState
): ProductsState => state.products;
