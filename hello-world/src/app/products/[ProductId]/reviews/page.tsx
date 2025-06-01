// type declaration
type PropsType = {
  params: Promise<{ productId: string }>
}

const Reviews = async (props: PropsType) => {
  // props destructuring
  const { params } = props
  // await for promise - promise returns an object and productId is property of that object
  const { productId } = await params
  return (
    <>
      Reviews for Product: {productId}
      <div>
        <h1>Reviews</h1>
        <li>Review 1</li>
        <li>Review 2</li>
        <li>Review 3</li>
      </div>
    </>
  )
}

export default Reviews