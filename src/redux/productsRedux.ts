//states
import { ShopState } from './mainTypes';
import { ProductsState } from './productsTypes';

export const getAllProducts = (
  state: ShopState
): ProductsState => state.products;
