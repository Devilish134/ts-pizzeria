import { type } from 'os';
import { cartProduct } from '../interfaces/cart.interface';

//cart state
export type CartState = Array<cartProduct>;

//action types
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

//action creator interfaces
interface addProductAction {
  type: 'ADD_PRODUCT';
  payload: cartProduct;
}

interface removeProductAction {
  type: 'REMOVE_PRODUCT';
  payload: string;
}

export type CartActions =
  | addProductAction
  | removeProductAction;
