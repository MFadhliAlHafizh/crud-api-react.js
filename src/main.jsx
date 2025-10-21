import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404Page from './components/Error404Page.jsx';
import Home from './components/Home.jsx';
import Create from './components/Create.jsx';
import Update from './components/Update.jsx';
import Detail from './components/Detail.jsx';

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
