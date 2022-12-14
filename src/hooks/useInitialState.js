import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const deleteFromCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart.filter((item) => item.id !== payload.id)],
    });
  };
  const deleteAllCart = () => {
    setState({
      ...state,
      cart: [],
    });
  };
  const addBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };
  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };
  return {
    addToCart,
    deleteFromCart,
    deleteAllCart,
    addBuyer,
    addNewOrder,
    state,
  };
};

export default useInitialState;
