import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Root from './pages/root'
import { DetailPage, Login } from './pages'
import AllProduct from './pages/AllProduct'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/details",
        element: <DetailPage />,
      },
      {
        path:"/allproduct",
        element:<AllProduct />,
      },
      {
        path:"/logins",
        element:<Login />
      }
    ]
    },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
