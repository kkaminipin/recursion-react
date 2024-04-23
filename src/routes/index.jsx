// import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import RecursionReact from '../RecursionReact';
const Routers = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          path: '/',
          element: <RecursionReact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routers;
