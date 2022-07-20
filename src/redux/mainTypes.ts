import { CartState } from './cartProductTypes';
import { ProductsState } from './productsTypes';

export interface ShoppingState {
  cartProducts: CartState;
}

export interface ShopState {
  products: ProductsState;
}
