import { Link, useLoaderData } from "react-router-dom"
import { getProducts } from "../services/ProductService"
import ProductDetails from "../components/ProductDetails"
import { ProductsList } from "../types"

export async function loader() {
  const products = await getProducts()
  return products
}

export default function Products() {
  const products = useLoaderData() as ProductsList
  
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Products</h2>
        <Link
          to="/products/new"
          className="px-4 py-3 text-sm font-bold transition border rounded-lg shadow-lg bg-cyan-100 border-cyan-400 active:scale-110 hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400"
        >
          Add Product
        </Link>
      </div>

      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="text-white bg-slate-800">
            <tr>
              <th className="p-2">Product</th>
              <th className="p-2">Price</th>
              <th className="p-2">Availability</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map( product => (
              <ProductDetails 
                key={product.id}
                product={product}
              />
            ))}

          </tbody>
        </table>
      </div>
    </>
  );
}
