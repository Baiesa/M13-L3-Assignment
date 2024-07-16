import React, { useReducer } from 'react';

interface ShoppingCartItem {
  id: number;
  name: string;
  price: number;
}

type ShoppingCartAction =
  | { type: 'ADD_ITEM'; payload: ShoppingCartItem }
  | { type: 'REMOVE_ITEM'; payload: number };

const shoppingCartReducer = (state: ShoppingCartItem[], action: ShoppingCartAction): ShoppingCartItem[] => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

const initialCart: ShoppingCartItem[] = [];

const ShoppingCart: React.FC = () => {
  const [cart, dispatch] = useReducer(shoppingCartReducer, initialCart);

  const addItem = (item: ShoppingCartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Cost: ${totalCost}</p>
    </div>
  );
};

export default ShoppingCart;