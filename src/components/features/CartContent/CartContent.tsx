import React from 'react';
import './../Cart.scss';
import { useQuery } from 'react-query';
import { useState } from 'react';
// Components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
// States
import { ShoppingState } from '../../../redux/mainTypes';
import { getCartProducts } from '../../../redux/cartRedux';

const CartContent = () => {
  /*const { data, isLoading, error } = useQuery<
    ShoppingState[]
  >(getCartProducts);*/

  return (
    <div className='cart_content'>
      <form className='cart_order-summary no-spacing'>
        <ul className='cart_order-summary no spacing'></ul>
        <ul className='cart_order-subtotal'>
          <li className='cart__order-subtotal'>
            <span className='cart__order-price-name'>
              Subtotal:
            </span>
            <span className='cart__order-price-sum'>
              $<strong>0</strong>
            </span>
          </li>
          <li className='cart__order-delivery'>
            <span className='cart__order-price-name'>
              Delivery:
            </span>
            <span className='cart__order-price-sum'>
              $<strong>0</strong>
            </span>
          </li>
          <li className='cart__order-total'>
            <span className='cart__order-price-name'>
              <strong>Total:</strong>
            </span>
            <span className='cart__order-price-sum'>
              $<strong>0</strong>
            </span>
          </li>
        </ul>
        <div className='cart_order-confirmation'>
          <input
            type='tel'
            name='phone'
            placeholder='Your phone'
          />
          <input
            type='text'
            name='address'
            placeholder='Your address'
          />
          <button
            type='submit'
            className='btn-secondary'
          >
            Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CartContent;
