import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 py-8 dark:bg-gray-800 dark:text-gray-400">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-42 h-12 rounded-full ">
            <img src="/esl-shop-logo-white_140x.png" alt="" />
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <a
                rel="noopener noreferrer "
                className="font-bold text-cyan-400"
                href="#"
              >
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <a
            rel="noopener noreferrer"
            className="font-bold text-cyan-400"
            href="#"
          >
            © Arjun Kumar Bose | 2023
          </a>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a
              rel="noopener noreferrer"
              className="font-bold text-cyan-400"
              href="#"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              className="font-bold text-cyan-400"
              href="#"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              className="font-bold text-cyan-400"
              href="#"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
