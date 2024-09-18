import { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailsProps = {
    product: Product
}

export default function ProductDetails({product}: ProductDetailsProps) {
    const isAvailable = product.availability
  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>
      <td className="p-3 text-lg text-center text-gray-800">{formatCurrency(+product.price)}</td>
      <td className={`p-3 text-lg text-center ${isAvailable ? 'text-green-800' : 'text-pink-800'}`}>{isAvailable ? 'Available' : 'Not available'}</td>
      <td className="p-3 text-lg text-gray-800 "></td>
    </tr>
  );
}
