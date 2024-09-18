import { Link } from "react-router-dom"

export default function Products() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Products</h2>
        <Link 
          to='/products/new'
          className="rounded-lg bg-cyan-100 border border-cyan-400 py-3 px-4 text-sm font-bold shadow-lg active:scale-110 hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition"
        >
          Add Product
        </Link>
      </div>
    </>
  )
}
