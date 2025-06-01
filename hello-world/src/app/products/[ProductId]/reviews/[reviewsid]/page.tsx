// export default async function ProductReview({
//   params,
// }: {
//   params: Promise<{ ProductId: string; reviewsid: string}>;
// }) {
//   const { ProductId, reviewsid } = await params
//   return <h1> Review {reviewsid} product {ProductId} </h1>
// }

import React from 'react'

const ProductReview = async ({ params, } : { prams : Promise< {ProductId: string; reviewsid: string}>;}) => {
 
  const ProductId = (await params).ProductId;
  const reviewsid = (await params).reviewsid;
  console.log("params", params)
  return (
    <div>Review {reviewsid} product {ProductId}</div>
  )

}

export default ProductReview