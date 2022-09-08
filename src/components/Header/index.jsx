import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

function Header() {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <header className="Header">
      <Link to="/">
        <h1 className="Title">Merch Store</h1>
      </Link>
      <Link to="/checkout">
        <div className="CheckoutButton">
          <FontAwesomeIcon icon={faCartShopping} />{' '}
          {cart.length > 0 && cart.length}
        </div>
      </Link>
    </header>
  );
}

export default Header;
