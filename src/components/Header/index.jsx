import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';

function Header() {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <header>
      <Link to="/">
        <h1>Merch Store</h1>
      </Link>
      <Link to="/checkout">
        <button>Checkout {cart.length > 0 && cart.length}</button>
      </Link>
    </header>
  );
}

export default Header;
