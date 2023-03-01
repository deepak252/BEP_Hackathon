import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { UserContextProvider } from './utils/context';

ReactDOM.render(
      <BrowserRouter>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </BrowserRouter> , document.getElementById("root")
  );
