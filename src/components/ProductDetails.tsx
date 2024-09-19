import { useNavigate, Form, ActionFunctionArgs, redirect, useFetcher } from "react-router-dom";
import { Product } from "../types";
import { formatCurrency } from "../utils";
import { deleteProduct } from "../services/ProductService";

type ProductDetailsProps = {
    product: Product
}

export async function action({params}: ActionFunctionArgs) {
  if(params.id !== undefined) {
    await deleteProduct(+params.id)
    return redirect('/')
  } 
}

export default function ProductDetails({product}: ProductDetailsProps) {
  const fetcher = useFetcher()
  const navigate = useNavigate()
  const isAvailable = product.availability
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-center text-gray-800">
        {formatCurrency(+product.price)}
      </td>
      <td
        className={`p-3 text-lg text-center ${
          isAvailable ? "text-green-800" : "text-pink-800"
        }`}
      >
        <fetcher.Form method="POST">
          <button
            type="submit"
            name="id"
            value={product.id}
            className={`${isAvailable ? "text-green-800 hover:border-green-800" : "text-pink-800 hover:border-pink-800"} font-bold border-b-2 border-transparent transition`}
          >
            {isAvailable ? "Available" : "Not available"}

          </button>

        </fetcher.Form>
      </td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex items-center gap-2">
          <button
            className="w-full px-2 py-1 text-sm font-black transition border border-yellow-400 rounded-lg cursor-pointer active:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400"
            onClick={() => navigate(`/products/${product.id}/edit`)}
          >
            Edit
          </button>

          <Form 
            method="POST" 
            action={`products/${product.id}/delete`}
            onSubmit={(e) => {
              if(!confirm(`Delete the product ${product.name}?`)) {
                e.preventDefault()
              }
            }}
            className="w-full"
          >
            <input type="submit" 
              className="w-full px-4 py-1 text-sm font-black transition border border-red-400 rounded-lg cursor-pointer active:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-red-400"
              value='Delete'
              id={product.id.toString()}
              name={product.id.toString()}
            />
          </Form>
        </div>
      </td>
    </tr>
  );
}
