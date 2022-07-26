import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

const rootElement =
  document.getElementById('root');
if (!rootElement)
  throw new Error(
    'Failed to find the root element'
  );
const root =
  ReactDOMClient.createRoot(rootElement);

const client = new QueryClient();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
