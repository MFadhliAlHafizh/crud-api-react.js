import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404Page from './Error404Page.jsx';
import Home from './Home.jsx';
import Create from './Create.jsx';
import Update from './Update.jsx';
import Detail from './Detail.jsx';

const router = createBrowserRouter([
  {
    // path:"/",
    errorElement: <Error404Page />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
