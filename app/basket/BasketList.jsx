"use client";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "@/redux/productSlice";
function BasketList() {
  const dispach = useDispatch();
  const { allProduct, price } = useSelector((store) => store.product);
  console.log(price);
  console.log(allProduct);
  if (allProduct.lenght === 0) {
    return <h1 className="text-3xl font-bold text-center">Karzinka Bo`sh</h1>;
  }
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Your Product</h1>
      <ul className="py-2 px-3 rounded-lg flex flex-col gap-3">
        {allProduct.map((prod) => {
          return (
            <li
              key={prod.id}
              className="flex justify-between py-2 px-3 bg-slate-400 rounded-md"
            >
              <img
                className="object-cover w-32 h-32 rounded-lg"
                src={prod.thumbnail}
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold">{prod.title}</h2>
                <h4>{price}$</h4>
                <p>{prod.amout} pcs</p>
              </div>
              <button
                onClick={() => dispach(deleteItem(prod.id))}
                className="btn btn-error"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BasketList;
