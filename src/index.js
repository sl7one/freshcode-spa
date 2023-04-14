import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/modern-normalize.css';
import './styles/index.css';
import './styles/reset.css';
import { App } from './components/App/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const publicRoutes = createBrowserRouter([
   {
      path: '/freshcode-spa',
      element: <App />,
   },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   // <React.StrictMode>
   <RouterProvider router={publicRoutes} />
   // </React.StrictMode>
);
