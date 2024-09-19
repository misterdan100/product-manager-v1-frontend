import { Link, Form, useActionData, ActionFunctionArgs, redirect, useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { getProductById, updateProduct } from "../services/ProductService";
import { Product } from "../types";

export async function loader({params}: LoaderFunctionArgs) {
    if(params.id !== undefined) {
        const product = await getProductById(+params.id)
        if(!product) {
            // throw new Response('', {status: 404, statusText: 'Product not found'})
            return redirect('/')
        }
        return product        
    }

}

export async function action({request, params}: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  
  let error = ''
  if(Object.values(data).includes('')) {
    error = 'All inputs are required.'
  }
  if(error.length) {
    return error
  }
  if(params.id !== undefined) {
    await updateProduct(data, +params.id)
    return redirect('/')
  }
  
}

export default function EditProduct() {
  const error = useActionData() as string
  const product = useLoaderData() as Product

  const availabilityOptions = [
    { name: "Available", value: true },
    { name: "Not available", value: false },
  ];
  
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Edit Product</h2>
        <Link
          to="/"
          className="px-4 py-3 text-sm font-bold transition border rounded-lg shadow-lg bg-cyan-100 border-cyan-400 active:scale-110 hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400"
        >
          Home
        </Link>
      </div>

      <Form className="mt-10" method="POST">
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
            defaultValue={product.name}
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
            defaultValue={product.price}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="availability">
            Availability:
          </label>
          <select
            id="availability"
            className="block w-full p-3 mt-2 bg-gray-50"
            name="availability"
            defaultValue={product?.availability.toString()}
          >
            {availabilityOptions.map((option) => (
              <option key={option.name} value={option.value.toString()}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        <input
          type="submit"
          className="w-full px-4 py-3 my-5 text-sm font-black uppercase transition border rounded-lg shadow-lg cursor-pointer bg-cyan-100 border-cyan-400 active:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400"
          value="Save"
        />
      </Form>
    </>
  );
}
