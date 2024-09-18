import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { loader as productsLoader } from './views/Products'
import NewProduct, { action as newProductAction } from './views/NewProduct'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader
      },
    ]
  },
  {
    path: '/products/new',
    element: <Layout />,
    children: [
      {
        index:true,
        element: <NewProduct />,
        action: newProductAction // connection with form
      }
    ]
  }
])
