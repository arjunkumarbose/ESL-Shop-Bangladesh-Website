import React, { useState, useEffect } from "react";
import HomeProductsCard from "../Home Product/HomeProductsCard";
import "react-tabs/style/react-tabs.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ReactFastMarquee from "react-fast-marquee"; // Import React Fast Marquee
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandPage = () => {
  // Initialize AOS animations
  useEffect(() => {
    Aos.init();
  }, []);

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("ESL");

  useEffect(() => {
    // Fetch products based on the selected category
    fetch(`https://esl-shop-bangladesh.vercel.app/allproducts/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  // Advertisement images by brand
  const advertisementImages = {
    ESL: [
      "https://shop.esl.com/cdn/shop/files/22092023_Viola-Schuldner_Dreamhack-Community-Collection_Cologne_038_1800x1800.jpg?v=1696859455",
      "https://shop.esl.com/cdn/shop/files/22092023_Viola-Schuldner_Dreamhack-Community-Collection_Cologne_056_800x.jpg?v=1696859573",
      "https://shop.esl.com/cdn/shop/files/22092023_Viola-Schuldner_Dreamhack-Community-Collection_Cologne_034_800x.jpg?v=1696859584",
      "https://shop.esl.com/cdn/shop/products/MOU145-detail-3_1800x1800.jpg?v=1678808139",
      "https://shop.esl.com/cdn/shop/products/MOU144-detail-3_1800x1800.jpg?v=1678807987",
      "https://shop.esl.com/cdn/shop/products/LIQ150-front_1800x1800.jpg?v=1678358575",
      "https://shop.esl.com/cdn/shop/files/FNA165-front_1800x1800.jpg?v=1690807875",
    ],
    Nike: [
      "https://i.ytimg.com/vi/cpuGsYFU1Gw/maxresdefault.jpg",
      "https://www.shape.com/thmb/9W8q3Mz0RU9ZT6C50-nz-wRoKDU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/serena_williams_fb1-6ef6d41f2df04df09adfdaeed2ea8b0c.jpg",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/88d6fab1-8149-4cc2-9077-87f601f8c5e2/sportswear-club-mens-long-sleeve-t-shirt-LJ1QzG.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8b064e8d-a937-438c-bce7-61da49ce0967/sportswear-club-mens-t-shirt-ShrJfX.png",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/971088f9-5641-428f-b647-6dca9bbb30eb/colin-kaepernick-x-joy-yamusangie-mens-t-shirt-71zpmd.png",
    ],
    Adidas: [
      "https://image.adsoftheworld.com/qh85s6xvnolcrp5991hwv3c0p3h5",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fb61a2f2d734411e821a5a2b34a26a8c_9366/Own_the_Run_Allover_Print_Tee_Turquoise_IL4800_25_model.jpg",
      "https://image.adsoftheworld.com/e4fbodrm33p4i05l3isxpfdnc17l",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f46f45025e2457899c5683b6e8dcca2_9366/Own_the_Run_Tee_Blue_IM2529_21_model.jpg",
      "https://image.adsoftheworld.com/t4unprpu9ccrlpbb71c4adsb6p3d",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2704cdfb5dc949e389af418c7ff90b04_9366/Messi_Mural_Tee_Black_JJ3627_01_laydown.jpg_3.jpg",
    ],
    Puma: [
      "https://marketing-interactive-assets.b-cdn.net/images/sg/content-images/by_year_month/2022-may/puma_new_shoes_campaign.jpg?auto_optimize=medium",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/705936/01/mod01/fnd/PNA/fmt/png/Chivas-23-24-Promo-Men's-Home-Jersey",
      "https://images.squarespace-cdn.com/content/v1/5e5c7a529a434412e7c35a17/4e66eaed-0132-4021-b22c-5aaf3a341060/PUMA-RT2.png",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/770438/01/mod01/fnd/PNA/fmt/png/Manchester-City-23/24-Men's-Replica-Home-Jersey",
      "https://i.ytimg.com/vi/XYiLxZTq1pY/maxresdefault.jpg",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/770449/02/mod01/fnd/PNA/fmt/png/Manchester-City-23/24-Men's-Away-Jersey",
    ],
    Champion: [
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-cotton-pique-t-shirt-ready-to-wear--HQY01WDFK001_PM1_Worn%20view.png?wid=600&hei=600",
      "https://static-prod.adweek.com/wp-content/uploads/2022/09/champion-homage-legacy-2022.jpg",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-embroidered-cotton-polo-ready-to-wear--HPY81WAENMU1_PM1_Cropped%20view.png?wid=600&hei=600",
      "https://www.media-marketing.com/wp-content/uploads/2018/04/champion-lansirao-novu-kampanju-fokusiranu-na-one-koji-se-ne-boje-slijediti-svoju-strast-e1522962280225.jpg",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-embroidered-cotton-t-shirt-ready-to-wear--HPY84WNPL002_PM1_Cropped%20view.png?wid=600&hei=600",
      "https://files.cdn.printful.com/o/upload/blog-og-image-upload/b5/b5331067e6929a8b181123ffa49026c8_l",
    ],
    Armani: [
      "data:image/jpeg;base64,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",
      "https://i.ytimg.com/vi/MIPfMyYQrOE/maxresdefault.jpg",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-cotton-pique-t-shirt-ready-to-wear--HQY01WDFK001_PM1_Worn%20view.png?wid=600&hei=600",
      "https://eu.louisvuitton.com/images/is/image/lv/1/VE_DI3_L/louis-vuitton--Louis_Vuitton_LV_Now_Cruise_Campaign_1_DI3.jpg?wid=1200&hei=630",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-embroidered-cotton-polo-ready-to-wear--HPY81WAENMU1_PM1_Cropped%20view.png?wid=600&hei=600",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-embroidered-cotton-t-shirt-ready-to-wear--HPY84WNPL002_PM1_Cropped%20view.png?wid=600&hei=600",
    ],
  };

  return (
    <div data-aos="fade-bottom" className="my-20 overflow-hidden">
      <div
        data-aos="fade-right"
        className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
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
          We got all the premium collection of your favorite eSports teams!
        </p>
      </div>

      <div className="space-x-5 text-center w-full lg-w-10/12 mx-auto md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
        <button
          onClick={() => handleCategoryChange("ESL")}
          className={`shadow-lg border-4 inline-block md:px-7 md:p-3 p-2 rounded-full border-cyan-200 text-cyan-400 bg-white md:text-2xl font-bold text-xs ${
            category === "ESL" && "text-green-400 border-green-200"
          }`}
        >
          ESL
          <img
            className="flex justify-center mx-auto py-2"
            width="120"
            height="120"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/ESL_Horizontal_Logo_2019.svg/2560px-ESL_Horizontal_Logo_2019.svg.png"
            alt="ESL Logo"
          />
        </button>
        <button
          onClick={() => handleCategoryChange("Nike")}
          className={` shadow-lg border-4 inline-block md:px-7 md:p-3 p-2 rounded-full border-cyan-200 text-cyan-400  md:text-2xl font-bold text-xs ${
            category === "Nike" && "text-green-400 border-green-200"
          }`}
        >
          Nike
          <svg
            className="flex justify-center mx-auto py-2"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path
              fill-rule="evenodd"
              d="M 6.40625 16.800781 C 3.152344 20.621094 0 25.234375 0 28.902344 C 0 31.019531 1.78125 33.996094 6.132813 33.996094 C 8.484375 33.996094 10.820313 33.050781 12.648438 32.320313 C 15.730469 31.085938 49.789063 16.296875 49.789063 16.296875 C 50.117188 16.132813 50.058594 15.925781 49.644531 16.027344 C 49.480469 16.070313 12.566406 26.074219 12.566406 26.074219 C 11.855469 26.273438 11.128906 26.382813 10.421875 26.382813 C 7.230469 26.382813 5.078125 24.851563 5.078125 21.503906 C 5.078125 20.207031 5.484375 18.640625 6.40625 16.800781 Z"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => handleCategoryChange("Adidas")}
          className={`shadow-lg border-4 inline-block md:px-7 md:p-3 p-2 rounded-full border-cyan-200 text-cyan-400 bg-white md:text-2xl font-bold text-xs ${
            category === "Adidas" && "text-green-400 border-green-200"
          }`}
        >
          Adidas
          <svg
            className="flex justify-center mx-auto py-2"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path d="M 24.8125 6.53125 C 20.890625 11.007813 18.839844 18.421875 19.09375 25.75 L 30.5 25.75 C 30.851563 18.273438 28.796875 10.890625 24.8125 6.53125 Z M 0 16.03125 C 0.386719 19.785156 1.167969 22.820313 2.4375 25.75 L 16.3125 25.75 C 12.652344 20.25 7.136719 17.300781 0 16.03125 Z M 50 16.0625 C 42.746094 17.164063 37.148438 20.265625 33.25 25.75 L 47.375 25.75 C 48.703125 22.859375 49.546875 19.730469 50 16.0625 Z M 3.5 28.5625 C 3.878906 29.386719 4.5 30.417969 5.03125 31.15625 L 44.6875 31.125 C 45.265625 30.316406 45.785156 29.484375 46.1875 28.5625 Z M 6.875 33.78125 C 7.695313 34.867188 8.382813 35.308594 9.40625 36.125 L 40.125 36.125 C 40.984375 35.453125 41.886719 34.660156 42.6875 33.78125 Z M 12.6875 38.28125 C 15.308594 39.902344 18.382813 40.964844 21.875 41.6875 L 21.46875 38.28125 Z M 22.3125 38.28125 C 22.988281 39.6875 23.859375 40.867188 24.84375 42 C 25.8125 40.847656 26.441406 39.667969 27.125 38.28125 Z M 28.15625 38.28125 L 27.625 41.5 C 31.132813 40.855469 34.222656 39.835938 36.90625 38.28125 Z"></path>
          </svg>
        </button>
        <button
          onClick={() => handleCategoryChange("Puma")}
          className={`shadow-lg border-4 inline-block md:px-7 md:p-3 p-2 rounded-full border-cyan-200 text-cyan-400 bg-white md:text-2xl font-bold text-xs ${
            category === "Puma" && "text-green-400 border-green-200"
          }`}
        >
          Puma
          <svg
            className="flex justify-center mx-auto py-2"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 40 40"
            id="puma"
          >
            <path d="M21.17 12.59c-.1 0-.19.38-.38.57s-.32.13-.41.29 0 .17-.06.28-.32.27-.32.44.23.29.42.46.17.24.36.31.4-.13.61-.06.34.09.38.27 0 .42-.21.39a2.31 2.31 0 0 0-.77-.07c-.46 0-1 .2-1 .71a.59.59 0 0 0 .67.56c.23 0 .12-.32.25-.46s1.13.61 2 .61a1.15 1.15 0 0 0 .93-.39s.06-.07.1-.07a.39.39 0 0 1 .13.05 4.61 4.61 0 0 0 3.9 1.75 1.82 1.82 0 0 1 1.14.5 3 3 0 0 1 .66 1.18A6.4 6.4 0 0 0 31 22l.68.53v.17c0 .44-.08 1.71.87 1.77.23 0 .17-.15.17-.27a1.31 1.31 0 0 1 .08-.67c.16-.31-.34-.45-.33-1.13 0-.5-.41-.42-.62-.8a1 1 0 0 1-.23-.61 5.29 5.29 0 0 0-.51-2.78c-.15-.19-.27-.26-.13-.35a2.42 2.42 0 0 0 1-1 6.08 6.08 0 0 1 1.32-2.29 3.89 3.89 0 0 1 .54-.36 3.64 3.64 0 0 0 .89-.51c.22-.22.4-.68.18-.95s-.73-.07-.93 0c-1.46.86-1.67 2.39-2.18 3.26a2.33 2.33 0 0 1-1.64 1.26 3 3 0 0 1-1.39-.27 7.13 7.13 0 0 1-1.92-1.27c-.31-.24-2.69-2.58-4.63-2.68 0 0-.24-.48-.3-.48s-.29.28-.39.32-.26-.33-.36-.32m-8.52 14.02a.36.36 0 0 1-.34-.34v-6h-2v6.65a.6.6 0 0 0 .59.6h3.48a.59.59 0 0 0 .59-.6v-6.69H13v6a.36.36 0 0 1-.34.34m6.65-6.34h-3a.65.65 0 0 0-.65.65v6.6h2v-6.05a.35.35 0 0 1 .34-.34.34.34 0 0 1 .34.33v6.06h2V21.4a.34.34 0 0 1 .68 0v6.05h2v-6.6a.65.65 0 0 0-.65-.65h-3M9 25.64H7v1.82H5v-7.25h4a.64.64 0 0 1 .64.65V25a.65.65 0 0 1-.64.64zm-1.34-4.22a.34.34 0 0 0-.33-.35H7v3.67h.34a.34.34 0 0 0 .33-.34v-3"></path>
            <path d="M26.31 27.46v-1.82h-.68v1.82h-2v-6.6a.65.65 0 0 1 .65-.65h3.36a.65.65 0 0 1 .64.65v6.6Zm0-2.72V21.4a.34.34 0 0 0-.34-.32.34.34 0 0 0-.34.33v3.33h.68"></path>
          </svg>
        </button>
        <button
          onClick={() => handleCategoryChange("Champion")}
          className={`shadow-lg border-4 inline-block md:px-7 md:p-3 p-2 rounded-full border-cyan-200 text-cyan-400 bg-white md:text-2xl font-bold text-xs ${
            category === "Champion" && "text-green-400 border-green-200"
          }`}
        >
          Champion
          <svg
            className="flex justify-center mx-auto py-2"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 192.756 192.756"
            id="champion"
          >
            <g fill-rule="evenodd" clip-rule="evenodd">
              <path fill="#fff" d="M0 0h192.756v192.756H0V0z"></path>
              <path d="M115.916 112.208c.295.44 2.477.175 2.887.08.947-.226.729-.976.721-2.315-.004-.898-.09-1.794-.094-2.693-.004-.462.033-.921.018-1.383-.09-3.651.707-6.461 2.389-8.431 1.18-1.383 2.539-1.882 2.773-1.929.898-.175 1.422.055 1.576.699.232.993.004 1.823-.682 2.489-.986.95-1.438.561-2.322.55-.592-.004-.592.255-.004.778 2.367 2.097 5.773 1.54 6.219 1.481 4.039-.506 6.471-3.301 6.973-3.396.506-.091-.25 2.126 1.467 2.919 1.92.889 6.406.455 8.82-1.558l1.533-1.281c.625-.521.115 1.383 2.973 2.894 3.338 1.766 9.213.379 9.373-4.255.051-1.34-1.084-1.995.32-2.261 2.111-.4 1.438-.153 3.27 3.658a43.77 43.77 0 0 0 .945 1.89c.344.575.707 1.415 1.668 1.2 1.26-.279 3.52-2.813 3.713-3.061l1.193-1.515c.131-.163.316-.105.557.175l3.338 3.877c.316.367.783.546 1.395.527.674-.018 1.5-.338 2.479-.957 1.744-1.106 3.033-2.162 3.863-3.163.932-1.125 1.197-1.856.797-2.184-.926-.764-2.465 1.082-3.625 1.617-3.062 1.404-4.744-3.848-5.971-4.51-.914-.495-2.217.083-3.924 1.732l-1.475 1.423c-.578.561-.99-1.467-1.434-2.275-.332-.597-.619-.961-.873-1.085-.83-.408-5.613 1.085-8.445 1.212l-2.217.102c-.709.036.156 1.033.287 1.769.291 1.62-.32 3.265-1.299 3.516-1.719.444-2.213-2.336-2.068-3.312.357-2.413 2.895-2.78 3.066-2.908.482-.356-.012-.721-1.119-.844-4.207-.462-5.611 3.982-10.281 6.526-3.598 1.963-2.562-.553-2.688-2.082-.291-3.614 1.217-3.862-3.48-3.724-.348.011-1.426-.124-1.746.645-.498 1.197.393 1.329-.732 2.631-1.371 1.587-2.857 2.562-4.459 2.923-2.398.546-1.303-.647-1.08-1.351.182-.567.287-1.055.316-1.456.135-1.67-2.027-3.6-5.551-3.09-3.105.455-5.471 3.16-5.57 3.225-.061.04-.111.113-.186.113h-.09c-.051 0-.07-.386-.059-1.158.033-1.816.277-2.246-1.311-2.315-1.863-.087-1.951.251-2.26.626-.518.615-.822 1.387-1.301 2.039-1.361 1.852-2.357 2.657-2.994 2.41-.4-.153-4.404-4.721-5.221-4.899-.734-.164-1.4.124-1.998.855l-2.621 3.221c-.215.263-.477.193-.785-.211l-2.502-3.232c-.465-.597-1.86-1.106-2.966.262l-2.639 3.269c-.164.204-.382.139-.655-.2l-2.945-3.571c-.094-.12-.713-.571-1.463-.302-.684.248-2.442 2.079-4.015 3.418-.575.487-1.078 1.066-1.675 1.525-.072.054-.134.124-.218.164-.561.276-1.085-.906-1.565-1.493-.946-1.143-1.612-1.772-1.987-1.885-1.795-.535-1.565 2.108-1.886 3.022-.735 2.11-3.629 2.321-3.644.062-.019-2.585 3.338-3.702 3.509-3.815.284-.189.787-.72-.298-.826-2.06-.2-4.299.514-6.719 2.141l-4.008 2.701c-1.787 1.197-3.079-3.152-3.574-3.877-.229-.338-.604-1.22-1.871-.921-.539.124-1.416.75-2.628 1.867l-2.064 1.907c-.146.135-.277.102-.386-.094-.116-.208-.218-1.548-.298-4.026-.047-1.529.041-3.062-.054-4.586-.051-.863-.135-.896-.022-2.832.011-.175.037-.35.033-.524-.007-.677-.535-.55-1.835-.575-1.216-.025-2.096-.204-2.133.564l-.298 6.628c-.189 4.248-.033 7.16.473 8.736.397 1.237.986 1.911 1.762 2.034 2.235.35 4.215-2.847 4.568-3.203.291-.294.593-.721 1.136-.072.371.451.593 1.016.939 1.484 1.321 1.784 1.776 1.795 3.105 1.763 2.33-.056 4.667-2.439 5.198-2.716.677-.356.597.364.713.688.561 1.539 2.653 2.667 5.082 2.133 3.029-.666 3.094-2.243 4.022-1.93.608.2 1.372 2.271 2.963 2.067.914-.112 3.043-2.013 4.379-3.003.958-.709 1.521-1.11 1.689-1.212.892-.528 1.016.731 3.152 3.112.779.862 1.631 1.711 3.465-.143l2.73-2.766c.619-.623 1.43 1.328 3.371 3.265.123.124.232.27.375.368.611.426 1.463.029 2.539-1.197l2.17-2.469c.186-.211.441-.167.77.131 1.262 1.15 2.762 3.495 3.975 3.604 1.098.099 2.602-.618 4.52-2.158l1.842-1.478c.59-.47.176 1.099.412 4.386.076 1.081.094 2.345.047 3.786-.094 2.801.373 5.714.445 5.819zM25.045 104.761c2.388.285 4.815.296 7.28.031 2.201-.235 4.047-.579 5.537-1.03 4.515-1.367 7.757-3.637 9.315-5.547 1.132-1.389-.399-.439-1.288-.096a42.125 42.125 0 0 1-8.744 2.341c-2.725.423-2.361.255-2.38-.828-.081-4.705.187-9.414.033-14.118-.042-1.238.001-1.183 1.381-1.056 2.557.233 5.297.855 8.221 1.869.533.185 2.801 1.455 1.472-.559-2.856-4.329-11.909-5.325-14.92-5.438-18.546-.684-27.743 11.117-19.285 19.006 3.191 2.976 7.65 4.784 13.378 5.425z"></path>
              <path
                fill="#cc2229"
                d="M21.435 84.447c.313-.107.635-.138.963-.091.458.064.453.228.477.576l-.042 15.243c.001.178-.054.304-.167.376-.234.151-2.645-.162-3.903-.528-1.598-.465-4.841-1.901-6.209-4.702-.742-1.52-.667-3.308-.59-3.715.787-4.157 5.236-6.594 9.471-7.159z"
              ></path>
              <path d="M138.271 90.664c.684.171 3.459.226 3.803-1.799.342-2.022-3.041-3.128-4.965-1.656-1.088.833-1.398 2.817 1.162 3.455zM179.98 90.631c.955 0 1.746-.784 1.746-1.751a1.749 1.749 0 0 0-3.496.008c0 .956.776 1.743 1.75 1.743z"></path>
              <path
                fill="#fff"
                d="M179.986 90.387a1.465 1.465 0 0 1-1.471-1.466c0-.822.654-1.479 1.467-1.479a1.472 1.472 0 1 1 .004 2.945z"
              ></path>
              <path d="M179.207 89.858h.406v-.795h.395c.176 0 .359.144.359.465 0 .238.01.261.027.33h.381c-.047-.197.006-.401-.041-.599-.051-.215-.189-.326-.318-.344a.49.49 0 0 0 .389-.497c0-.309-.227-.549-.588-.549h-1.01v1.989z"></path>
              <path
                fill="#fff"
                d="M179.613 88.795v-.574h.504c.172 0 .297.134.297.29 0 .16-.131.292-.281.29l-.52-.006z"
              ></path>
            </g>
          </svg>
        </button>
        <button
          onClick={() => handleCategoryChange("Armani")}
          className={`shadow-lg border-4 inline-block md:px-7 md:p-3 p-2 rounded-full border-cyan-200 text-cyan-400 bg-white md:text-2xl font-bold text-xs ${
            category === "Armani" && "text-green-400 border-green-200"
          }`}
        >
          Armani
          <svg
            className="flex justify-center mx-auto py-2"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 248 248"
            id="emporio"
          >
            <path fill="#fff" d="M0 0h248v248H0z"></path>
            <path d="M65.092 69.78H10.467c-1.756 9.428 7.394 13.125 7.394 13.125h58.323L65.092 69.78zM81.024 88.778H26.398c-1.756 9.428 7.394 13.125 7.394 13.125h58.323L81.024 88.778zM237.531 69.78h-54.625l-11.092 13.125h58.322c.003 0 9.152-3.697 7.395-13.125zM166.975 88.778l-11.092 13.125h58.322s9.15-3.697 7.395-13.125h-54.625zM151.042 107.777l-4.89 5.786c-1.293-1.264-3.614-3.643-5.063-5.786h-37.356c-.245 2.467-.575 4.794-1.004 6.831l-5.772-6.831H42.33c-1.756 9.427 7.395 13.125 7.395 13.125h148.548s9.15-3.697 7.395-13.125h-54.626zM138.656 101.903l-4.424-13.125h-30.078c.069 2.056.173 4.024.173 5.869 0 2.355-.054 4.816-.171 7.256h34.5zM150.383 79.892s-1.41-8.021-10.609-11.028h-31.485c-3.111 5.069-3.994 10.169-4.158 14.958h32.827c.422-3.2.882-3.93 13.425-3.93zM133.203 140.848h3.215l-1.607-4.005zM104.478 131.857c-4.468 0-8.332 3.095-10.174 8.99h18.815c-.538-5.756-2.372-8.99-8.641-8.99z"></path>
            <path d="M58.822 126.257v4.692c0 5.467 4.432 9.898 9.898 9.898h20.144c2.656-7.672 9.02-10.481 14.777-10.481 1.289 0 2.462.19 3.528.541 7.059 1.387 7.431-.403 7.444-.699v-.041s.002.017 0 .041v3.188l.001 7.451h16.58l5.018-12.498 5.016 12.498h38.053c5.468 0 9.898-4.432 9.898-9.897v-4.692l-130.357-.001zM93.152 149.244c0 4.689.603 8.214 1.647 10.814h16.436v-6.345h-2.832v-1.271h10.979v1.271h-3.08v6.345h7.184l5.854-14.591H93.359a33.418 33.418 0 0 0-.207 3.777zM127.555 154.928h14.511l-3.795-9.46h-6.921zM125.495 160.059h18.631l-1.549-3.859h-15.533zM166.1 145.468H143.08l5.854 14.591h17.148c4.148-1.933 7.025-6.136 7.025-11.014v-3.577H166.1zM87.812 145.468H74.89v3.577c0 4.878 2.876 9.081 7.025 11.014h8.291c-1.603-2.824-2.619-6.406-2.619-10.814.001-1.343.079-2.6.225-3.777zM109.292 164.545H97.933c1.848 1.508 4.106 2.086 6.545 2.086 1.948 0 3.542-.756 4.814-2.086z"></path>
            <path d="M150.734 164.545l.707 1.766h3.556v1.27h-13.083v-1.27h4.721l-.707-1.766H123.694l-.707 1.766h3.154v1.27h-8.298v-1.27h3.135l.707-1.766h-5.382v3.577s-1.491-4.074-6.969-1.455a.017.017 0 0 0 .002-.005c-1.629 1.1-3.531 1.715-5.695 1.715-3.122 0-6.752-1.229-9.771-3.832h-3.317c-.048.489-.073.988-.073 1.489 0 5.702 3.17 10.646 7.807 13.102h51.424c4.638-2.456 7.808-7.399 7.808-13.102 0-.501-.023-1-.072-1.489h-6.713z"></path>
          </svg>
        </button>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-2xl text-red-500 font-bold mt-4">
          No products are available currently for this brand!
        </p>
      ) : (
        <div>
          <ReactFastMarquee gradient={false} speed={40}>
            {advertisementImages[category].map((image, index) => (
              <img
                className="h-1/3 max-h-72 py-10 px-10"
                key={index}
                src={image}
                alt={`Brand Image ${index}`}
              />
            ))}
          </ReactFastMarquee>
          <div
            data-aos="fade-up"
            className="w-10/12 mx-auto md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10"
          >
            {products.slice(0, 6).map((product) => {
              return <HomeProductsCard key={product._id} product={product} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandPage;
