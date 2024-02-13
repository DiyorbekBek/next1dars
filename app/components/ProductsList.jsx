import Link from "next/link";

function ProductsList({ products }) {
  console.log(products);
  return (
    <ul className="grid grid-cols-3 gap-5">
      {products.products.map((prod) => {
        return (
          <li className="card w-72 bg-base-100 shadow-xl">
            <figure>
              <img
                src={prod.thumbnail}
                alt="Shoes"
                className="h-60 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {prod.title}
                <div className="badge badge-secondary">{prod.price}$</div>
              </h2>
              <p className="line-clamp-2">{prod.description}...</p>
              <div className="card-actions justify-end mb-5">
                <div className="badge badge-outline uppercase bg-orange-600 text-white p-2 font-bold">
                  {prod.category}
                </div>
              </div>
              <Link className="btn btn-primary" href={`/product/${prod.id}`}>
                Go To Product
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsList;
