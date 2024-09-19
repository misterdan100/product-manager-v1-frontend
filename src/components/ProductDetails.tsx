import { useNavigate } from "react-router-dom";
import { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailsProps = {
    product: Product
}

export default function ProductDetails({product}: ProductDetailsProps) {
    const isAvailable = product.availability
    const navigate = useNavigate()
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
        {isAvailable ? "Available" : "Not available"}
      </td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex items-center gap-2">
          <button
            className="w-full px-2 py-1 text-sm font-black uppercase transition border border-yellow-400 rounded-lg cursor-pointer active:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400"
            onClick={() => navigate(`/products/${product.id}/edit`)}
          >
            Edit
          </button>
          <button
            className="w-full px-2 py-1 text-sm font-black uppercase transition border border-red-400 rounded-lg cursor-pointer active:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-red-400"
            onClick={() => navigate(`/products/${product.id}/edit`)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
