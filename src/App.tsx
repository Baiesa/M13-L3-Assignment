import React from 'react';
import Counter from './components/Counter';
import ShoppingCart from './components/ShoppingCart';

const App: React.FC = () => {
  return (
    <div>
      <h1>React TypeScript Hooks Example</h1>
      <Counter />
      <ShoppingCart />
    </div>
  );
};

export default App;