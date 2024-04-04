import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import ShopContextProvider from './Context/ShopContext';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ShopContextProvider>
  <Provider store={store}>
    <App />
  </Provider>
    
  //  </ShopContextProvider>
    
    
  
);


