import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import credentials from '../../../credentials';
import './styles.css';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();
  const paypalOptions = {
    clientId: credentials.paypal_clientId,
    currency: 'USD',
  };
  const sumOfPrices = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  const handlePaymentSuccess = (details, data) => {
    if (details.status == 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: { details, data },
      };
      console.log(newOrder);
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <PayPalButton
          amount={`${sumOfPrices()}`}
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details, data) => handlePaymentSuccess(details, data)}
          options={paypalOptions}
          style={{
            layout: 'vertical',
            color: 'black',
            shape: 'pill',
          }}
        />
      </div>
      <div />
    </div>
  );
};

export default Payment;
