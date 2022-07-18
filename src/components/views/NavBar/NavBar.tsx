import Cart from '../../features/Cart/Cart';
import './NavBar.scss';

const NavBar = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <h1>Pizzeria Italiano</h1>
        <p className='subtitle'>
          the best pizza in town!
        </p>
      </div>
      <Cart />
    </header>
  );
};

export default NavBar;
