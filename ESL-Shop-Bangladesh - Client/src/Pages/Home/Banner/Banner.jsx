import { Link } from "react-router-dom";

const Banner = () => {
  const backgroundImageUrl =
    "https://assets-global.website-files.com/5f9bee46b9797e0f20f87207/616e8869f83751e03422f71f_06_1058_RGB.png";

  const bannerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  return (
    <div className="mb-16  w-full" style={bannerStyle}>
      <div className="hero-overlay bg-black bg-opacity-40  h-[800px]">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl py-32 mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div></div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-cyan-400 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-cyan-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative ">
                  Be cool with your desiered authentic clothings!
                </span>
              </span>
            </h2>
            <p className="text-xl text-cyan-300 py-10 ">
              Official ESL Clothings, Merchandise now available in{" "}
              <span className="text-green-400 font-bold">Bangladesh</span>!
            </p>
            <Link to={"/allproducts"}>
              <button className="btn inline-flex items-center btn-outline justify-center h-12 px-6 font-medium tracking-wide text-cyan-400 transition duration-200 rounded shadow-md bg-black bg-opacity-40 hover-bg-gray-800 focus-shadow-outline focus-outline-none">
                See all Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
