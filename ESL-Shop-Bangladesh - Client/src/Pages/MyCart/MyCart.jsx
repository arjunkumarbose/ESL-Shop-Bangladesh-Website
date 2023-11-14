import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Banner from "../../Shared/Banner/Banner";

const Mycart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useContext(AuthContext);
  const userId = user?.uid;
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    fetch("https://esl-shop-bangladesh.vercel.app/allproducts/all")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    const fetchCartItems = async () => {
      try {
        console.log(userId);
        const response = await fetch(
          `https://esl-shop-bangladesh.vercel.app/carts?userId=${userId}`
        );
        if (response.status === 404) {
          console.log("User's cart is empty.");
          setCartItems([]); // Set an empty array for an empty cart
        } else {
          const data = await response.json();
          console.log(data);
          setCartItems(data);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
    handleSelectedProducts();
  }, [userId]);

  const handleSelectedProducts = () => {
    const selectedProducts = products.filter((product) => {
      return cartItems.find((item) => item.productId === product._id);
    });
    setSelectedProducts(selectedProducts);
  };

  const removeFromCart = (productId) => {
    fetch(
      `https://esl-shop-bangladesh.vercel.app/removefromcart/${productId}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.productId) {
          Swal.fire("Error", "Item could not be removed from cart!", "error");
        } else {
          Swal.fire("Success", "Item removed from cart!", "success");
          //window.location.reload();
          setCartItems(cartItems.filter((item) => item._id !== productId));
        }
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error);
      });
  };

  return (
    <div>
      <Banner title={"My Cart"}></Banner>
      <div className="my-10 w-full mx-auto md:w-full">
        <div className="overflow-x-auto">
          <table className="table table-compact  w-full">
            <thead>
              <tr className="text-cyan-400 text-center">
                <th className="bg-black">Product Image</th>
                <th className="bg-black">Product Name</th>
                <th className="bg-black">Quantity</th>
                <th className="bg-black">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center">
                    Your cart is empty!
                  </td>
                </tr>
              ) : (
                cartItems.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className="avatar">
                        <div className="w-24 rounded-full ring ring-cyan-400 ring-offset-base-100 ring-offset-2">
                          <img src={item?.product?.pictureURL} alt="" />
                          {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                        </div>
                      </div>
                    </td>
                    <td>{item?.product?.name}</td>
                    <td>{item.quantity}</td> {/* Display the quantity */}
                    <td>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="btn text-red-400 bg-black font-bold rounded-full"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mycart;
