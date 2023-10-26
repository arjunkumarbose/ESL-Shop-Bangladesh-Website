import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Offer = () => {
  // for react AOS Animation
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className=" bject-left  duration-300 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase rounded-full bg-teal-accent-400">
            Membership Plans
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
            <span className="relative">Choose</span>
          </span>{" "}
          your way, Do shopping Everyday!
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We are offering various memberships plans for special price offers and
          discounts!
        </p>
      </div>
      <div className="grid max-w-md gap-4 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="https://collegerecon.com/wp-content/uploads/2020/09/discounts-on-clothing-and-accessories.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-lg font-semibold">Basic</div>
              <p className="text-sm text-gray-900">
                Flat 10% Discount on all products for 1 year long!
              </p>
              <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                $12
              </div>
            </div>
            <button className="btn btn-outline w-full font-bold text-cyan-400 bg-black bg-opacity-80 hover:bg-cyan-300 hover:text-black">
              Buy Basic
            </button>
          </div>
        </div>
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="https://www.incrediblehealth.com/wp-content/uploads/2021/05/AdobeStock_213941253-scaled.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-lg font-semibold">Advanced</div>
              <p className="text-sm text-gray-900">
                Flat 20% discount & free doorstep home delivery for 1 year long!
              </p>
              <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                $38
              </div>
            </div>
            <button className="btn btn-outline  w-full font-bold text-cyan-400 bg-black bg-opacity-80 hover:bg-cyan-300 hover:text-black">
              Buy Advanced
            </button>
          </div>
        </div>
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
          <div className="relative w-full h-48">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCDtkFNYHr73dhPxP5SADil4az0zf5fOa6hA&usqp=CAU?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-full rounded-t"
              alt="Plan"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
            <div>
              <div className="text-lg font-semibold">Pro</div>
              <p className="text-sm text-gray-900">
                Special customized products, discounts upto 50% & free delivery
                for 1 year!
              </p>
              <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                $78
              </div>
            </div>
            <button className="btn btn-outline w-full font-bold text-cyan-400 bg-black bg-opacity-80 hover:bg-cyan-300 hover:text-black">
              Buy Pro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
