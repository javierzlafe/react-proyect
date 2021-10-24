import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserAuthProvider } from './context/UserAuthContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UserAuthProvider>
      <App />
    </UserAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
