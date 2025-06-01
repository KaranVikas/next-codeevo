import { notFound } from "next/navigation";

const ProductReview = async ({params} : {params: Promise<{ productId: string;}>}) => {
  const { productId } = await params;
  if (parseInt(productId) > 100) {
    notFound();
  }
  return (
    <div>Product Review {productId} </div>
  )
}

export default ProductReview