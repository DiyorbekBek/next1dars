import ProductInfo from "./ProductInfo";

async function getData(id) {
  const req = await fetch("https://dummyjson.com/products/" + id);
  const data = await req.json();

  return data;
}

async function SingleProduct({ params }) {
  const singleData = await getData(params.id);
  return <ProductInfo singleData={singleData} />;
}

export default SingleProduct;
