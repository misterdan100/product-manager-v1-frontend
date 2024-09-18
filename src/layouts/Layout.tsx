import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="bg-cyan-950">
        <div className="mx-auto max-w-6xl py-5">
          <h1 className="text-4xl font-bold text-white">Products Manager</h1>
        </div>
      </header>

      <main className="mt-5 mx-auto max-w-6xl p-5 bg-white shadow-lg rounded-xl">
        <Outlet />
      </main>
    </>
  );
}
