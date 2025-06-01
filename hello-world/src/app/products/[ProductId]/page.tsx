import React from 'react'

const ProductDetails = async ({ params, }: { params: Promise<{ productId: string }>; }) => {
  const ProductId = (await params).ProductId;
  console.log("params", params)
  return (
    <div>Details about the productId {ProductId} asdf
    </div>
  )
}

export default ProductDetails