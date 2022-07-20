import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const rootElement =
  document.getElementById('root');
if (!rootElement)
  throw new Error(
    'Failed to find the root element'
  );
const root =
  ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
