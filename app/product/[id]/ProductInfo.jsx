"use client";
import { useDispatch, useSelector } from "react-redux";
import { addToCard } from "@/redux/productSlice";
function ProductInfo({ singleData }) {
  const dispach = useDispatch();

  return (
    <div>
      <h1 className="text-4xl font-light text-center my-5">
        {singleData.title}
      </h1>
      <p className="mb-5">{singleData.description}</p>
      <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-box">
        {singleData.images.map((image) => {
          return (
            <div className="carousel-item" key={image}>
              <img src={image} alt="Burger" className="rounded-box h-80" />
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => dispach(addToCard({ ...singleData, amout: 1 }))}
          className="btn btn-secondary"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
