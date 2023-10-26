import React, { useContext, useState } from "react";
import Banner from "../../Shared/Banner/Banner";
import useTitle from "../../Hooks/useTitle";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  useTitle("Product Details");
  const product = useLoaderData();
  const [quantity, setQuantity] = useState(1); // State to manage the quantity
  const { user } = useContext(AuthContext);
  const userId = user?.uid;

  const {
    productId,
    name,
    pictureURL,
    price,
    availableQuantity,
    subCategory,
    email,
    addedBy,
  } = product || {};

  const addToCart = async () => {
    if (quantity >= 0 && quantity <= availableQuantity) {
      try {
        const response = await fetch(
          "https://b8a10-brandshop-server-side-arjunkumarbose.vercel.app/addtocart",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: userId,
              productId: productId,
              quantity: quantity,
            }),
          }
        );
        const data = await response.json();
        console.log(data.message);
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Success", "Item added to cart!", "success");
        } else {
          Swal.fire(
            "Error",
            "Item could not be added to cart: " + data.message,
            "error"
          );
        }
      } catch (error) {
        console.error("Error adding item to cart:", error);
        Swal.fire(
          "Error",
          "Item could not be added to cart: " + error.message,
          "error"
        );
      }
    } else {
      Swal.fire("Error", "Please enter a valid quantity!", "error");
    }
  };

  return (
    <div>
      <Banner title={name} info={subCategory} />
      <div className="md:flex items-center justify-center gap-5 mt-20 w-10/12 mx-auto md:w-full">
        <div className="border lg:w-1/3 rounded-md">
          <img className="w-full object-cover" src={pictureURL} alt={name} />
        </div>
        <div className="lg:w-1/2 space-y-2">
          <p className="text-xl text-slate-600 font-semibold">
            Brand: {subCategory}
          </p>
          <h3 className="text-3xl font-bold">{name}</h3>
          <p className="text-2xl text-cyan-400 font-bold py-2">
            Price: ${price}
          </p>
          <p className="text-base font-semibold text-gray-600">
            Available:{" "}
            <span className="textre text-gray-800 font-semibold">
              {availableQuantity}
            </span>
          </p>
          <div className="py-3">
            <input
              type="number"
              className="border border-gray-300 rounded-md w-1/2 p-2"
              placeholder="Enter Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button className="btn btn-warning" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
          <p className="text-base">
            {" "}
            Added By:{" "}
            <span className="textre text-gray-800 font-semibold">
              {email}
            </span>{" "}
          </p>{" "}
          <p className="text-base">
            {" "}
            E-mail:{" "}
            <span className="textre text-gray-800 font-semibold">
              {addedBy}
            </span>{" "}
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
