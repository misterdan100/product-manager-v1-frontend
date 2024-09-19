import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { loader as productsLoader, action as updateAvailabilityAction } from './views/Products'
import NewProduct, { action as newProductAction } from './views/NewProduct'
import EditProduct from './views/EditProduct'
import { loader as editProductLoader, action as editProductAction } from './views/EditProduct'
import { action as deleteProductAction } from './components/ProductDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
        action: updateAvailabilityAction,
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
      },
      {
        path: 'products/:id/delete',
        action: deleteProductAction,
      }
    ]
  },
])
