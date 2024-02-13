import ProductsList from "./components/ProductsList";

async function getData() {
  const req = await fetch("https://dummyjson.com/products");
  const data = await req.json();

  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <h1 className="text-2xl font-bold mb-3">Products</h1>
      <ProductsList products={data} />
    </main>
  );
}
