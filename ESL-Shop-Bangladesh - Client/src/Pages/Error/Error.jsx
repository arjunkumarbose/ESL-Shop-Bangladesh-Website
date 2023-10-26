import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full items-center ">
      <div className="text-center ">
        <img
          className="w-full h-[800px] object-cover"
          src="https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png"
          alt=""
        />
        <Link
          className="btn bg-black font-bold text-cyan-400
          hover:bg-cyan-400 hover:text-black "
          to={"/"}
        >
          Go to Home Page
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Error;
