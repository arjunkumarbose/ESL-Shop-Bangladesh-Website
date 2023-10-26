import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gallery = () => {
  // for react AOS Animation
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-gray-50 lg:p-20 w-10/12 mx-auto md:w-full">
      <div
        data-aos="fade-right"
        className=" max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase rounded-full bg-teal-accent-400">
            Hand Crafted
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
            <span className="relative">Quality</span>
          </span>{" "}
          means everything to us!
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We have a dedicated team of designers and craftsmen who are always on
          the lookout for new ideas and designs!
        </p>
      </div>

      <div
        data-aos="flip-right"
        className="grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 overflow-hidden"
      >
        <div>
          <img
            className="w-full h-44 md:h-72 object-cover object-center"
            src="https://dug5azr6j37mk.cloudfront.net/2023/09/mattpacking3.webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-44 md:h-72 object-cover object-center"
            src="https://dug5azr6j37mk.cloudfront.net/2023/09/FNldt1AXwBQoKmP-1.webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-44 md:h-72 object-cover object-center"
            src="https://dug5azr6j37mk.cloudfront.net/2022/01/DSC03837-2048x842.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-44 md:h-72 object-cover object-center"
            src="https://dug5azr6j37mk.cloudfront.net/2022/01/popupbanner.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-44 md:h-72 object-cover object-center"
            src="https://dug5azr6j37mk.cloudfront.net/2022/01/DSC03748-819x1024.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-44 md:h-72 object-cover object-center"
            src="https://dug5azr6j37mk.cloudfront.net/2022/01/DSC03761-819x1024.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
