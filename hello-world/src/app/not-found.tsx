"use client";
import { usePathname} from "next/navigation"

const NotFound = () => {
  const pathname = usePathname();
  const productId = pathname.split("/")[2]
  // const reviewId = pathname.split["/"][4]
  
  return (
    <div>
      <h2>
        Product not found {productId}
      </h2>
      <p>
        Could not find requested resource
      </p>
    </div>
  )
}

export default NotFound