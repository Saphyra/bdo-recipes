import React from 'react';
import ReactDOM from 'react-dom/client';
import RecipeList from './component/RecipeList';
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ItemDetails from './component/ItemDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipeList />,
  },
  {
    path: "item/:itemId",
    element: <ItemDetails />,
    loader: ({ params }) => { return params.itemId }
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);