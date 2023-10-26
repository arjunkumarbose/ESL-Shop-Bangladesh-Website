import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Features = () => {
  // for react AOS Animation
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        data-aos="fade-right"
        className="pt-20 max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase rounded-full bg-teal-accent-400">
            Authorized Brands
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
            <span className="relative">Get</span>
          </span>{" "}
          all the branded products!
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We are offering various branded products for special price offers and
          discounts!
        </p>
      </div>

      <div data-aos="fade-right" className="p-6  dark:text-gray-100 bg-white">
        <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path
                fill-rule="evenodd"
                d="M 6.40625 16.800781 C 3.152344 20.621094 0 25.234375 0 28.902344 C 0 31.019531 1.78125 33.996094 6.132813 33.996094 C 8.484375 33.996094 10.820313 33.050781 12.648438 32.320313 C 15.730469 31.085938 49.789063 16.296875 49.789063 16.296875 C 50.117188 16.132813 50.058594 15.925781 49.644531 16.027344 C 49.480469 16.070313 12.566406 26.074219 12.566406 26.074219 C 11.855469 26.273438 11.128906 26.382813 10.421875 26.382813 C 7.230469 26.382813 5.078125 24.851563 5.078125 21.503906 C 5.078125 20.207031 5.484375 18.640625 6.40625 16.800781 Z"
              ></path>
            </svg>
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 24.8125 6.53125 C 20.890625 11.007813 18.839844 18.421875 19.09375 25.75 L 30.5 25.75 C 30.851563 18.273438 28.796875 10.890625 24.8125 6.53125 Z M 0 16.03125 C 0.386719 19.785156 1.167969 22.820313 2.4375 25.75 L 16.3125 25.75 C 12.652344 20.25 7.136719 17.300781 0 16.03125 Z M 50 16.0625 C 42.746094 17.164063 37.148438 20.265625 33.25 25.75 L 47.375 25.75 C 48.703125 22.859375 49.546875 19.730469 50 16.0625 Z M 3.5 28.5625 C 3.878906 29.386719 4.5 30.417969 5.03125 31.15625 L 44.6875 31.125 C 45.265625 30.316406 45.785156 29.484375 46.1875 28.5625 Z M 6.875 33.78125 C 7.695313 34.867188 8.382813 35.308594 9.40625 36.125 L 40.125 36.125 C 40.984375 35.453125 41.886719 34.660156 42.6875 33.78125 Z M 12.6875 38.28125 C 15.308594 39.902344 18.382813 40.964844 21.875 41.6875 L 21.46875 38.28125 Z M 22.3125 38.28125 C 22.988281 39.6875 23.859375 40.867188 24.84375 42 C 25.8125 40.847656 26.441406 39.667969 27.125 38.28125 Z M 28.15625 38.28125 L 27.625 41.5 C 31.132813 40.855469 34.222656 39.835938 36.90625 38.28125 Z"></path>
            </svg>
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 40 40"
              id="puma"
            >
              <path d="M21.17 12.59c-.1 0-.19.38-.38.57s-.32.13-.41.29 0 .17-.06.28-.32.27-.32.44.23.29.42.46.17.24.36.31.4-.13.61-.06.34.09.38.27 0 .42-.21.39a2.31 2.31 0 0 0-.77-.07c-.46 0-1 .2-1 .71a.59.59 0 0 0 .67.56c.23 0 .12-.32.25-.46s1.13.61 2 .61a1.15 1.15 0 0 0 .93-.39s.06-.07.1-.07a.39.39 0 0 1 .13.05 4.61 4.61 0 0 0 3.9 1.75 1.82 1.82 0 0 1 1.14.5 3 3 0 0 1 .66 1.18A6.4 6.4 0 0 0 31 22l.68.53v.17c0 .44-.08 1.71.87 1.77.23 0 .17-.15.17-.27a1.31 1.31 0 0 1 .08-.67c.16-.31-.34-.45-.33-1.13 0-.5-.41-.42-.62-.8a1 1 0 0 1-.23-.61 5.29 5.29 0 0 0-.51-2.78c-.15-.19-.27-.26-.13-.35a2.42 2.42 0 0 0 1-1 6.08 6.08 0 0 1 1.32-2.29 3.89 3.89 0 0 1 .54-.36 3.64 3.64 0 0 0 .89-.51c.22-.22.4-.68.18-.95s-.73-.07-.93 0c-1.46.86-1.67 2.39-2.18 3.26a2.33 2.33 0 0 1-1.64 1.26 3 3 0 0 1-1.39-.27 7.13 7.13 0 0 1-1.92-1.27c-.31-.24-2.69-2.58-4.63-2.68 0 0-.24-.48-.3-.48s-.29.28-.39.32-.26-.33-.36-.32m-8.52 14.02a.36.36 0 0 1-.34-.34v-6h-2v6.65a.6.6 0 0 0 .59.6h3.48a.59.59 0 0 0 .59-.6v-6.69H13v6a.36.36 0 0 1-.34.34m6.65-6.34h-3a.65.65 0 0 0-.65.65v6.6h2v-6.05a.35.35 0 0 1 .34-.34.34.34 0 0 1 .34.33v6.06h2V21.4a.34.34 0 0 1 .68 0v6.05h2v-6.6a.65.65 0 0 0-.65-.65h-3M9 25.64H7v1.82H5v-7.25h4a.64.64 0 0 1 .64.65V25a.65.65 0 0 1-.64.64zm-1.34-4.22a.34.34 0 0 0-.33-.35H7v3.67h.34a.34.34 0 0 0 .33-.34v-3"></path>
              <path d="M26.31 27.46v-1.82h-.68v1.82h-2v-6.6a.65.65 0 0 1 .65-.65h3.36a.65.65 0 0 1 .64.65v6.6Zm0-2.72V21.4a.34.34 0 0 0-.34-.32.34.34 0 0 0-.34.33v3.33h.68"></path>
            </svg>
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 248 248"
              id="emporio"
            >
              <path fill="#fff" d="M0 0h248v248H0z"></path>
              <path d="M65.092 69.78H10.467c-1.756 9.428 7.394 13.125 7.394 13.125h58.323L65.092 69.78zM81.024 88.778H26.398c-1.756 9.428 7.394 13.125 7.394 13.125h58.323L81.024 88.778zM237.531 69.78h-54.625l-11.092 13.125h58.322c.003 0 9.152-3.697 7.395-13.125zM166.975 88.778l-11.092 13.125h58.322s9.15-3.697 7.395-13.125h-54.625zM151.042 107.777l-4.89 5.786c-1.293-1.264-3.614-3.643-5.063-5.786h-37.356c-.245 2.467-.575 4.794-1.004 6.831l-5.772-6.831H42.33c-1.756 9.427 7.395 13.125 7.395 13.125h148.548s9.15-3.697 7.395-13.125h-54.626zM138.656 101.903l-4.424-13.125h-30.078c.069 2.056.173 4.024.173 5.869 0 2.355-.054 4.816-.171 7.256h34.5zM150.383 79.892s-1.41-8.021-10.609-11.028h-31.485c-3.111 5.069-3.994 10.169-4.158 14.958h32.827c.422-3.2.882-3.93 13.425-3.93zM133.203 140.848h3.215l-1.607-4.005zM104.478 131.857c-4.468 0-8.332 3.095-10.174 8.99h18.815c-.538-5.756-2.372-8.99-8.641-8.99z"></path>
              <path d="M58.822 126.257v4.692c0 5.467 4.432 9.898 9.898 9.898h20.144c2.656-7.672 9.02-10.481 14.777-10.481 1.289 0 2.462.19 3.528.541 7.059 1.387 7.431-.403 7.444-.699v-.041s.002.017 0 .041v3.188l.001 7.451h16.58l5.018-12.498 5.016 12.498h38.053c5.468 0 9.898-4.432 9.898-9.897v-4.692l-130.357-.001zM93.152 149.244c0 4.689.603 8.214 1.647 10.814h16.436v-6.345h-2.832v-1.271h10.979v1.271h-3.08v6.345h7.184l5.854-14.591H93.359a33.418 33.418 0 0 0-.207 3.777zM127.555 154.928h14.511l-3.795-9.46h-6.921zM125.495 160.059h18.631l-1.549-3.859h-15.533zM166.1 145.468H143.08l5.854 14.591h17.148c4.148-1.933 7.025-6.136 7.025-11.014v-3.577H166.1zM87.812 145.468H74.89v3.577c0 4.878 2.876 9.081 7.025 11.014h8.291c-1.603-2.824-2.619-6.406-2.619-10.814.001-1.343.079-2.6.225-3.777zM109.292 164.545H97.933c1.848 1.508 4.106 2.086 6.545 2.086 1.948 0 3.542-.756 4.814-2.086z"></path>
              <path d="M150.734 164.545l.707 1.766h3.556v1.27h-13.083v-1.27h4.721l-.707-1.766H123.694l-.707 1.766h3.154v1.27h-8.298v-1.27h3.135l.707-1.766h-5.382v3.577s-1.491-4.074-6.969-1.455a.017.017 0 0 0 .002-.005c-1.629 1.1-3.531 1.715-5.695 1.715-3.122 0-6.752-1.229-9.771-3.832h-3.317c-.048.489-.073.988-.073 1.489 0 5.702 3.17 10.646 7.807 13.102h51.424c4.638-2.456 7.808-7.399 7.808-13.102 0-.501-.023-1-.072-1.489h-6.713z"></path>
            </svg>
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 420 420"
              id="louis-vuitton"
            >
              <g data-name="Champion">
                <path
                  fill-rule="evenodd"
                  d="M334.127 375.379h4.514v38.158l-27.594-28.88v27.46h-4.64v-38.551l27.717 29.01v-27.2Zm-129.682 0v23.332a14.464 14.464 0 0 1-3.485 10.057c-2.446 2.836-5.8 4.124-10.053 4.124a12.324 12.324 0 0 1-9.8-4.124 13.985 13.985 0 0 1-3.611-10.057v-23.332h4.651v21.787c0 7.607 2.836 11.477 8.765 11.477 6.057 0 9.024-3.87 9.024-11.477v-21.787Zm14.18 0h22.043v4.255h-8.765v32.486h-4.383v-32.486h-8.9Zm-7.992 0h4.64v36.741h-4.64v-36.741Zm-40.608 0h5.022l-15.986 38.8-15.984-38.8h5.028l10.958 27.2 10.956-27.2Zm127.877 18.432a14.319 14.319 0 0 1-4.381 10.571 13.628 13.628 0 0 1-10.188 4.255 14.606 14.606 0 0 1-10.438-4.255 14.308 14.308 0 0 1-4.383-10.571 14.528 14.528 0 0 1 14.822-14.824 13.457 13.457 0 0 1 10.443 4.381 14.594 14.594 0 0 1 4.125 10.444Zm-1.029-13.535a19.142 19.142 0 0 0-27.2 0 19.137 19.137 0 0 0 0 27.2 18.867 18.867 0 0 0 13.664 5.417 19.052 19.052 0 0 0 13.538-32.614Zm-33.9-4.9v4.255h-8.638v32.486h-4.64v-32.483h-8.768v-4.255h22.043Zm-213.226 7.99a14.5 14.5 0 0 1 4 10.443 14.708 14.708 0 0 1-4.253 10.571 14.118 14.118 0 0 1-10.314 4.255 14.615 14.615 0 0 1-10.44-4.255 15.252 15.252 0 0 1-4.253-10.571 14.6 14.6 0 0 1 4.122-10.443 13.925 13.925 0 0 1 10.571-4.381 13.727 13.727 0 0 1 10.567 4.381Zm2.967-3.093a18.928 18.928 0 0 0-13.535-5.672 18.294 18.294 0 0 0-13.532 5.675 18.84 18.84 0 0 0 0 27.2 18.366 18.366 0 0 0 13.535 5.417 18.359 18.359 0 0 0 13.535-5.417 19.137 19.137 0 0 0 0-27.2Zm14.053 16.893c0 7.607 2.964 11.477 8.9 11.477 5.8 0 8.9-3.87 8.9-11.477v-21.789h4.512v23.332c0 4.124-1.16 7.476-3.611 10.057a12.313 12.313 0 0 1-9.8 4.124c-4.124 0-7.348-1.288-9.8-4.124-2.579-2.581-3.737-5.933-3.737-10.057v-23.332h4.64v21.789ZM8.24 375.379v32.614h11.215v4.124H3.728v-36.74H8.24Zm110.477 15.081c6.188 2.446 9.154 6.057 9.154 10.956a10.813 10.813 0 0 1-3.48 8.251 10.982 10.982 0 0 1-8.123 3.226 10.789 10.789 0 0 1-7.733-2.967 11.917 11.917 0 0 1-3.739-7.345l4.64-1.034a6.9 6.9 0 0 0 2.063 5.158 7.011 7.011 0 0 0 5.028 1.933 6.665 6.665 0 0 0 4.9-2.192 7.269 7.269 0 0 0 1.8-5.028c0-2.836-2.063-5.154-6.316-6.963l-2.579-.9c-5.156-2.451-7.864-5.543-7.864-9.413a8.759 8.759 0 0 1 3.223-6.963 11.36 11.36 0 0 1 7.607-2.577 10.1 10.1 0 0 1 9.409 5.672l-3.609 2.063a6.705 6.705 0 0 0-5.931-3.352 6.926 6.926 0 0 0-4.255 1.288 4.764 4.764 0 0 0-1.935 3.865c0 2.192 1.676 3.87 5.284 5.158l2.451 1.16Zm-23.46-15.081h4.642v36.741h-4.642ZM276.279 43.266l-88.911 209.85-24.529-53.825 45.308-123.325c3.407-9.537 15.329-13.967 35.43-13.967l7.15-18.733h-105.6l-6.814 18.738c14.99 0 21.122 4.428 18.736 13.967l-22.481 62.682-44.29-95.387c-8.176-10.219-4.089-15.331 11.924-15.331V5.794H0v22.142c19.079 0 31 5.112 36.112 15.331L111.059 202.7 75.97 296.383c-.684 12.6-20.44 18.74-58.6 18.74l-7.153 18.736h291.612l40.54-86.189h-21.122c-19.756 44.626-42.581 67.453-68.131 67.453H119.232l19.758-52.8 17.033 34.064h38.155L301.827 43.266c5.112-15.331 18.4-23.5 39.178-23.5V0h-87.891v19.761c26.573 0 34.069 8.176 23.166 23.5Z"
                  data-name="Path 52072"
                ></path>
              </g>
            </svg>
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 192.744 192.744"
              id="ralph"
            >
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path fill="#fff" d="M0 0h192.744v192.744H0V0z"></path>
                <path d="M117.576 110.16H97.633v-.648h1.799V82.8h-1.799v-.72h7.631v.72h-1.943l.072 26.712h7.847c3.527 0 4.32-2.952 5.688-8.568h.648v9.216zM177.408 109.872V93.888h-1.08v-.432h3.6l8.855 12.456V93.888h-.791l.072-.432h1.872v.432h-.791v16.56H189l-11.16-15.84-.072 15.264h1.08v.432h-2.375v-.432h.935zM145.512 93.744v10.728c0 2.16-.432 3.744-1.295 4.681-.865.936-2.232 1.439-4.105 1.439-3.455 0-5.76-.792-5.76-5.616V93.744h-1.295v-.432h5.039v.432h-1.225v11.304c0 3.096.648 4.896 3.744 4.968 3.098.072 4.537-2.088 4.537-5.111v-11.16h-1.08v-.432h2.664v.432h-1.224v-.001zM174.24 105.336c-.359 2.232-.359 3.096-2.377 4.32-.576.359-2.23.216-3.455.144h-2.52v-7.92h.576c1.367 0 1.943.144 2.375.432.504.288 1.08.792 1.08 1.656v.864h.359v-6.408h-.359v.864c0 .72-.576 1.368-1.152 1.728-.504.36-1.08.504-2.303.504h-.576v-7.704h2.23c1.08.072 1.873.072 2.521.216a3.75 3.75 0 0 1 1.439.504c.432.216.721.504.863.864.145.36.361.936.432 1.728.072.072.072.144.072.216v.145h.361l-.072-4.104h-11.449v.432h1.152V109.8h-1.368l-7.201-8.136c2.521 0 6.121-1.08 6.121-4.032 0-3.456-2.809-4.248-5.4-4.248h-7.703v.432h1.367v16.056h-1.367v.432h5.398v-.432h-1.512v-8.136l7.416 8.496H174.6v-4.896h-.36zm-22.465-4.104v-7.417c1.369-.072 2.881-.072 4.176.288 1.584.432 2.377 2.016 2.377 3.528 0 3.168-3.096 3.601-5.545 3.601a2.373 2.373 0 0 1-1.008 0zM75.528 110.16h1.368v.432h-5.112v-.432h1.368V94.176h-1.368v-.432h5.112v.432h-1.368v6.767h7.056v-6.767h-1.44v-.432h5.184v.432h-1.44v15.984h1.44v.432h-5.04v-.432h1.296v-8.712h-7.056v8.712zM56.88 110.592H44.928v-.432h1.08V94.104h-1.08v-.432h4.608v.432h-1.224v16.056H53.064c2.16 0 2.664-1.801 3.456-5.185h.36v5.617zM42.048 110.232l-6.336-16.705h-.936l-5.904 16.632h-2.52L14.4 96.336c4.248 0 10.152-1.728 10.152-6.696 0-5.76-4.608-7.056-8.928-7.056H2.88v.72h2.232v26.712H2.88v.648h8.928v-.648l-2.52-.072V96.48L21.6 110.592l8.856.072v-.504h-1.008l2.232-6.48h5.256l2.448 6.553h-1.8v.432h6.048v-.432h-1.584v-.001zm-10.224-6.984l2.376-6.84 2.592 6.84h-4.968zm-22.536-7.56l.072-12.384c2.304-.072 4.68-.144 6.912.504 2.592.648 3.888 3.312 3.888 5.832 0 5.256-5.184 5.976-9.216 6.048H9.288zM63.648 93.744h-5.904v.432h1.296v15.984h-1.296v.432h5.184v-.432h-1.44v-7.057l2.736.072c1.944 0 3.528-.432 4.824-1.296 1.224-.864 1.8-2.016 1.8-3.384 0-3.959-4.032-4.751-7.2-4.751zm.144 8.928l-2.304.072v-8.568l2.16-.072c2.52 0 4.536 1.296 4.536 4.536 0 2.664-1.872 4.032-4.392 4.032zM132.695 109.8l-6.336-16.704h-1.008l-5.832 16.632h-1.152v.433h2.664v-.433h-.936l2.16-6.407h5.328l2.375 6.479h-1.727v.433h5.975l.072-.433h-1.583zm-10.222-6.984l2.375-6.841 2.52 6.841h-4.895z"></path>
              </g>
            </svg>
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
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
          </div>
          <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 240 180.037"
              id="under"
            >
              <path d="M238.553 22.362s-6.882-5.327-29.168-13.512C189.83 1.653 174.893 0 174.893 0l.074 42.679c0 18.039-20.385 37.194-55.199 37.194h-.996c-34.81 0-55.188-19.155-55.188-37.194L63.652 0S48.729 1.652 29.166 8.85C6.881 17.035 0 22.362 0 22.362c1.652 34.229 54.826 62.43 119.263 62.445h.015c64.441-.015 117.628-28.216 119.275-62.445"></path>
              <path d="M238.582 118.203s-6.881 5.312-29.167 13.504c-19.569 7.198-34.493 8.843-34.493 8.843l.075-42.672c0-18.035-20.386-37.183-55.199-37.183l-.49-.015h-.015l-.483.015c-34.817 0-55.195 19.148-55.195 37.183l.076 42.672s-14.931-1.645-34.493-8.843C6.919 123.515.024 118.203.024 118.203c1.652-34.226 54.84-62.427 119.285-62.449 64.44.022 117.629 28.223 119.273 62.449M11.611 179.946c-5.432 0-5.53-4.135-5.53-5.733v-7.528c0-.469-.03-1.072.936-1.072h2.799c.92 0 .868.635.868 1.072v7.528c0 .543.091 1.978 2.067 1.978h4.708c1.939 0 2.052-1.435 2.052-1.978v-7.528c0-.438-.062-1.072.853-1.072H23.2c1.02 0 .928.635.928 1.072v7.528c0 1.601-.106 5.733-5.545 5.733M37.632 179.026c-1.916-2.58-4.655-5.824-7.446-9.266v9.174c0 .407.098 1.012-.86 1.012h-2.618c-.943 0-.837-.604-.837-1.012v-12.268c0-.422-.038-1.057.837-1.057h5.107c1.441 0 3.501 2.897 4.844 4.828 1.049 1.449 2.965 3.651 4.255 5.312v-9.084c0-.422-.053-1.057.898-1.057h2.844c.905 0 .854.635.854 1.057v13.277h-5.243c-1.126.004-1.609.08-2.635-.916M47.244 179.946v-14.319h12.652c.77 0 5.968-.104 5.968 5.356 0 5.568.596 8.963-5.862 8.963h-6.82l-1.471-2.987v2.987m7.513-3.772c2.301 0 2.127-2.202 2.127-3.214 0-3.38-.951-3.518-2.467-3.518h-7.22v6.73l7.56.002zM70.813 165.718h11.664c.981 0 .853.646.853 1.84 0 1.116.151 1.75-.853 1.75h-9.219c-.242 0-1.086-.119-1.086.74 0 .875-.159 1.223.762 1.223h8.148l1.313 2.609c.188.362.166.68-.551.68h-8.436l-1.305-2.551v3.758c0 .875.777.709 1.003.709h9.574c.951 0 .868.664.868 1.75 0 1.162.083 1.812-.868 1.812H70.563c-1.011 0-2.98-.315-2.98-3.472v-7.891c0-.83.43-2.957 3.23-2.957M86.475 165.626h12.758c1.712 0 4.202-.016 4.202 4.604 0 3.018-.641 3.168-2.015 4.104 2.301.393 1.992 3.334 1.992 4.857 0 .771-.279.754-.506.754h-3.742c-.785 0-.596-1.236-.596-1.885 0-1.75-.981-1.676-1.366-1.676h-5.507c-.528-.921-1.554-2.973-1.554-2.973v5.945l-.702.588h-3.765l-.377-.469v-12.613c.001-.888.627-1.236 1.178-1.236m10.162 3.788h-5.681c-.951 0-.905.315-.905.604v2.563h5.847c2.837 0 2.837-.709 2.837-1.448-.001-1.478-.121-1.719-2.098-1.719M125.404 165.718c.936 0 1.848.422 2.832 2.338.664 1.373 5.297 9.748 6.277 11.498v.482h-4.828l-1.39-2.52h-5.872l-1.27-2.883c-.361.588-2.3 4.27-2.964 5.401h-4.843v-.315c.988-1.857 7.733-14.004 7.733-14.004m2.817 3.972l-2.369 4.299.219.213h4.391l.219-.213-2.24-4.314-.22.015M137.576 165.626h12.766c1.705 0 4.195-.016 4.195 4.604 0 3.018-.635 3.168-2.008 4.104 2.311.393 1.992 3.334 1.992 4.857 0 .771-.287.754-.514.754h-3.742c-.783 0-.588-1.236-.588-1.885 0-1.75-.98-1.676-1.357-1.676h-5.521c-.529-.921-1.557-2.973-1.557-2.973v5.945l-.691.588h-3.773l-.377-.469v-12.613c-.001-.888.632-1.236 1.175-1.236m10.171 3.788h-5.688c-.951 0-.904.315-.904.604v2.563h5.854c2.821 0 2.821-.709 2.821-1.448-.001-1.478-.105-1.719-2.083-1.719M165.688 179.946c-.949-1.78-3.59-6.699-5.371-9.928v8.933c0 .377.061.995-.859.995h-2.58c-.966 0-.891-.618-.891-.995v-12.269c0-.438-.061-1.057.891-1.057h4.467c.664 0 1.613-.15 2.67 1.977.801 1.705 2.489 5.252 3.668 7.123 1.176-1.871 2.912-5.418 3.711-7.123 1.041-2.127 1.961-1.977 2.717-1.977h4.451c.904 0 .799.619.799 1.057v12.269c0 .377.137.995-.799.995h-2.611c-.95 0-.875-.618-.875-.995v-8.933c-1.811 3.229-4.422 8.146-5.416 9.928M185.092 179.976c-4.225 0-4.043-4.525-4.043-7.482 0-2.688-.303-6.896 4.993-6.941h9.416c5.312 0 4.964 4.271 4.964 6.941 0 2.957.213 7.482-4.089 7.482m-2.731-3.682c2.144 0 2.067-2.218 2.067-3.695 0-1.344.317-3.427-2.476-3.427h-4.736c-2.775 0-2.445 2.083-2.445 3.427 0 1.479-.136 3.695 2.008 3.695h5.582zM207.499 179.946c-5.417 0-5.522-4.135-5.522-5.733v-7.528c0-.469-.029-1.072.937-1.072h2.808c.92 0 .858.635.858 1.072v7.528c0 .543.091 1.978 2.067 1.978h4.707c1.947 0 2.053-1.435 2.053-1.978v-7.528c0-.438-.045-1.072.859-1.072h2.821c1.026 0 .937.635.937 1.072v7.528c0 1.601-.092 5.733-5.553 5.733M223.04 165.626h12.767c1.705 0 4.193-.016 4.193 4.604 0 3.018-.648 3.168-2.021 4.104 2.31.393 2.008 3.334 2.008 4.857 0 .771-.287.754-.514.754h-3.742c-.77 0-.588-1.236-.588-1.885 0-1.75-.996-1.676-1.373-1.676h-5.508c-.527-.921-1.555-2.973-1.555-2.973v5.945l-.709.588h-3.758l-.377-.469v-12.613c0-.888.634-1.236 1.177-1.236m10.155 3.788h-5.674c-.951 0-.906.315-.906.604v2.563h5.855c2.821 0 2.821-.709 2.821-1.448.002-1.478-.119-1.719-2.096-1.719"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
