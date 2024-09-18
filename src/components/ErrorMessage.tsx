import { PropsWithChildren } from "react";

export default function ErrorMessage({children}: PropsWithChildren) {
  return (
    <div className="p-3 font-bold text-center text-pink-600">
        {children}
    </div>
  )
}
