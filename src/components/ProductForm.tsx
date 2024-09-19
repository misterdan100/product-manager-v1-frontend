import { Product } from "../types";

type ProductFormProps = {
    product?: Product
}

export default function ProductForm({product}: ProductFormProps) {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="name">
          Product name:
        </label>
        <input
          id="name"
          type="text"
          className="block w-full p-3 mt-2 transition border-0 rounded-lg outline-none bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-cyan-600"
          placeholder="Nombre del Producto"
          name="name"
          defaultValue={product?.name}
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="price">
          Price:
        </label>
        <input
          id="price"
          type="number"
          className="block w-full p-3 mt-2 transition border-0 rounded-lg outline-none bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-cyan-600"
          placeholder="Precio Producto. ej. 200, 300"
          name="price"
          defaultValue={product?.price}
        />
      </div>
    </>
  );
}
