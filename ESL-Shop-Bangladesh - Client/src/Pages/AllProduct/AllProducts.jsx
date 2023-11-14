import React, { useEffect, useState } from "react";
import Banner from "../../Shared/Banner/Banner";
import { FaSearch } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const AllProducts = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  useTitle("All Products");
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState(" ");

  useEffect(() => {
    fetch("https://esl-shop-bangladesh.vercel.app/allproducts/all")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProductDetails = (productId) => {
    if (user) {
      navigate(`/productdetails/${productId}`);
    } else {
      Swal.fire({
        icon: "error",
        title: "You have to log in first to view details",
        text: "Without a login, you cannot visit this page!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      navigate("/login");
    }
  };

  const handleSearch = () => {
    fetch(`https://esl-shop-bangladesh.vercel.app/searchproducts/${searchText}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  return (
    <div>
      <Banner title={"All Products"} />
      <div
        data-aos="fade-up"
        className="mt-5 mb-10 text-center w-[600px] mx-auto"
      >
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch />
          </div>

          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:border-red-600"
            placeholder="Search by product name"
          />

          <button
            onClick={handleSearch}
            type="submit"
            className="text-cyan-400 absolute right-2.5 bottom-2.5 bg-black hover:btn-outline font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </div>

      <div data-aos="fade-up" className="my-10 w-11/12 mx-auto md:w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.map((product) => (
            <div
              key={product._id}
              className="relative overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 bg-white"
              style={{
                height: "100%",
                transition: "transform 0.2s",
              }}
            >
              <div
                className="w-full h-96 bg-cover bg-white"
                style={{
                  backgroundImage: `url('${product.pictureURL}')`,
                }}
              ></div>
              <div className="p-4">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                  {product.name}
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {product.description}
                </p>
                <div className="flex mt-2 item-center"></div>
                <div className="flex justify-between mt-3 item-center">
                  <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                    ${product.price}
                  </h1>
                  <button
                    onClick={() => handleProductDetails(product._id)}
                    className="px-2 py-1 text-xs font-bold text-cyan-400 bg-black uppercase transition-colors duration-300 transform rounded  hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
                  >
                    View Details
                  </button>
                  <Link to={`/updateproduct/${product._id}`}>
                    <button className="px-2 py-2 text-xs font-bold text-orange-400 bg-black uppercase transition-colors duration-300 transform rounded  hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                      Update
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
