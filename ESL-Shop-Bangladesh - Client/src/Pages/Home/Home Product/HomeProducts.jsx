import { useEffect, useState } from "react";
import HomeProductsCard from "./HomeProductsCard";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeProducts = () => {
  // for react AOS animation
  useEffect(() => {
    Aos.init();
  }, []);

  const [products, setProducts] = useState([]);
  const [catagory, setCatagory] = useState("ESL");

  useEffect(() => {
    fetch(
      `https://b8a10-brandshop-server-side-arjunkumarbose.vercel.app/allproducts/${catagory}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [catagory]);

  return (
    <div data-aos="fade-bottom" className="my-20 overflow-hidden">
      <div
        data-aos="fade-right"
        className=" max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase rounded-full bg-teal-accent-400">
            Premium Collection
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="bc9273ce-29bb-4565-959b-714607d4d027"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Fanboy</span>
          </span>{" "}
          of eSports teams? We got you covered!
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We got all the premium collection of your favourite eSports teams!
        </p>
      </div>

      <div className="space-x-5 text-center w-full lg:w-10/12 mx-auto md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
        <button
          onClick={() => setCatagory("ESL")}
          className={`shadow-lg border-4 inline-block md:px-7 md:p-3 p-2 rounded-full border-cyan-200 text-cyan-400 bg-black md:text-2xl  font-bold text-xs ${
            catagory === "ESL" && "text-green-400 border-green-200"
          }`}
        >
          ESL
        </button>
        <button
          onClick={() => setCatagory("Nike")}
          className={`shadow-lg border-4 inline-block md:px-7 md:p-3 p-2 rounded-full border-cyan-200 text-cyan-400 bg-black md:text-2xl  font-bold text-xs ${
            catagory === "Nike" && "text-green-400 border-green-200"
          }`}
        >
          Nike
        </button>
        <button
          onClick={() => setCatagory("Adidas")}
          className={`shadow-lg border-4 inline-block md:px-7 md:p-3 p-02 rounded-full border-cyan-200  text-cyan-400 bg-black md:text-2xl  font-bold text-xs ${
            catagory === "Adidas" && "text-green-400 border-green-200"
          }`}
        >
          Adidas
        </button>
        <button
          onClick={() => setCatagory("Puma")}
          className={`shadow-lg border-4 inline-block md:px-7 md:p-3 p-02 rounded-full border-cyan-200  text-cyan-400 bg-black md:text-2xl  font-bold text-xs ${
            catagory === "Puma" && "text-green-400 border-green-200"
          }`}
        >
          Puma
        </button>
        <button
          onClick={() => setCatagory("Champion")}
          className={`shadow-lg border-4 inline-block md:px-7 md:p-3 p-02 rounded-full border-cyan-200  text-cyan-400 bg-black md:text-2xl  font-bold text-xs ${
            catagory === "Champion" && "text-green-400 border-green-200"
          }`}
        >
          Champion
        </button>
        <button
          onClick={() => setCatagory("Armani")}
          className={`shadow-lg border-4 inline-block md:px-7 md:p-3 p-02 rounded-full border-cyan-200  text-cyan-400 bg-black md:text-2xl  font-bold text-xs ${
            catagory === "Armani" && "text-green-400 border-green-200"
          }`}
        >
          Armani
        </button>
      </div>

      <div
        data-aos="fade-up"
        className="w-10/12 mx-auto md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10"
      >
        {products.length === 0 ? (
          <p className="text-center text-2xl text-red-500 font-bold mt-4">
            No products are available currently for this brand!
          </p>
        ) : (
          products
            .slice(0, 6)
            .map((product) => (
              <HomeProductsCard
                key={product._id}
                product={product}
              ></HomeProductsCard>
            ))
        )}
      </div>

      <div className="flex justify-center text-center items-center">
        <Link to={"/brandpage"}>
          <button className="btn inline-flex items-center btn-outline justify-center h-12 px-6 font-medium tracking-wide text-cyan-400 transition duration-200 rounded shadow-md  hover-bg-gray-800 focus-shadow-outline focus-outline-none">
            Browse All Our Brands
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeProducts;
