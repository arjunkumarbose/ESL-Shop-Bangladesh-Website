import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Banner from "../../Shared/Banner/Banner";
import MyProductsTable from "./MyProductsTable";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";
import Aos from "aos";
import "aos/dist/aos.css";

const MyProducts = () => {
  // for react AOS Animation
  useEffect(() => {
    Aos.init();
  }, []);

  const { user } = useContext(AuthContext);
  useTitle("My Product");
  const [myProducts, setMyProducts] = useState([]);
  const [updateProduct, setupdateProduct] = useState(false);
  const [sortbyPrice, useShortByPrice] = useState(1);

  useEffect(() => {
    fetch(
      `https://esl-shop-bangladesh.vercel.app/myproducts?email=${user?.email}&sort=${sortbyPrice}`
    )
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, [user, updateProduct, sortbyPrice]);

  const handleDeleteUpdate = (id) => {
    const remainProducts = myProducts.filter((products) => products._id !== id);
    setMyProducts(remainProducts);
  };

  return (
    <div className="">
      <Banner title={"My Products"}></Banner>

      <div data-aos="fade-up" className="flex justify-center my-10">
        <div className="border px-5 py-2 max-w-fit">
          <p className="text-2xl font-bold">
            Price{" "}
            <FaArrowUp
              onClick={() => useShortByPrice(1)}
              className={`inline-block ${sortbyPrice === 1 && "text-cyan-400"}`}
            ></FaArrowUp>{" "}
            <FaArrowDown
              onClick={() => useShortByPrice(-1)}
              className={`inline-block ${
                sortbyPrice === -1 && "text-cyan-400"
              }`}
            ></FaArrowDown>{" "}
          </p>
        </div>
      </div>
      <div className="my-10 w-11/12 mx-auto md:w-full">
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr className="text-cyan-400">
                <th className="bg-black"></th>
                <th className="bg-black">Product Image</th>
                <th className="bg-black">Name</th>
                <th className="bg-black">Added By</th>
                <th className="bg-black">category</th>
                <th className="bg-black">Price</th>
                <th className="bg-black">Quantity</th>
                <th className="bg-black">Update</th>
                <th className="bg-black">Delete</th>
              </tr>
            </thead>
            <tbody>
              {myProducts.map((product, i) => {
                return (
                  <MyProductsTable
                    handleDeleteUpdate={handleDeleteUpdate}
                    product={product}
                    i={i}
                    setupdateProduct={setupdateProduct}
                    updateProduct={updateProduct}
                    key={product._id}
                  ></MyProductsTable>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
