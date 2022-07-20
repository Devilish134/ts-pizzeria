import './Cart.scss';
import CartContent from './CartContent/CartContent';

const Cart = () => {
  return (
    <div id='cart' className='cart'>
      <div className='cart__summary'>
        <span className='cart__total-number'>
          0
        </span>
        <span className='cart__total-price'>
          Total price: $<strong>0</strong>
        </span>
        <i className='fa fa-chevron-down'></i>
        <i className='fa fa-shopping-cart cart__icon'></i>
      </div>
    </div>
  );
};

export default Cart;
