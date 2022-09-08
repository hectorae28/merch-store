import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Checkout = () => {
  const { state, deleteFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleDeleteFromCart = (item) => {
    deleteFromCart(item);
  };
  const sumOfPrices = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos...</h3>}
        {cart.map((item) => (
          <div className="Checkout-item" key={item.id}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={() => handleDeleteFromCart(item)}>
              <FontAwesomeIcon icon={faTrashCan} className="Trash" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${sumOfPrices()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
