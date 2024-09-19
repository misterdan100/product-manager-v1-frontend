import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { loader as productsLoader } from './views/Products'
import NewProduct, { action as newProductAction } from './views/NewProduct'
import EditProduct from './views/EditProduct'
import { loader as editProductLoader, action as editProductAction } from './views/EditProduct'

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
      {
        path: '/products/new',
        element: <NewProduct />,
        action: newProductAction // connection with form,
      },
      {
        path: '/products/:id/edit', // ROA Pattern - Resource-oriented design
        element: <EditProduct />,
        action: editProductAction,
        loader: editProductLoader,
      }
    ]
  },
])
