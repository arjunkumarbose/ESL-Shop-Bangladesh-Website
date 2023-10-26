import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const HomeProductsCard = ({ product }) => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const { name, pictureURL, price, rating, _id } = product;

  const handleUserAuthenticate = () => {
    if (user) {
      navigate(`/productdetails/${_id}`);
    } else {
      Swal.fire({
        icon: "error",
        title: "You have to log in first to view details",
        text: "Without a login, you can not visit the single product details page",
        footer: '<a href="">Why do I have this issue?</a>',
      });
      navigate("/login");
    }
  };

  return (
    <div className="card  card-compact drop-shadow-sm justify-center text-center hover:-translate-y-2 duration-500 bg-base-100 hover:shadow-2xl h-[400px] md:h-[500px] ">
      <figure>
        <img
          className=" max-w-[350px] w-full h-[420px] object-cover"
          src={pictureURL}
          alt="Products"
        />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title flex font-bold justify-center text-center">
          {name}
        </h2>
        <div className="flex justify-between">
          <p className=" font-bold text-xl">Price: ${price}</p>
          <p className="flex justify-end items-center font-bold">
            Rating: {rating} |{" "}
          </p>
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        </div>
        <div className="card-actions flex justify-center">
          <button
            onClick={handleUserAuthenticate}
            className="btn btn-outline px-10 lg:px-16 font-bold text-cyan-400 bg-black bg-opacity-80 hover:bg-cyan-300 hover:text-black"
          >
            Details
          </button>
          <Link to={`/updateproduct/${product._id}`}>
            <button
              onClick={handleUserAuthenticate}
              className="btn btn-outline px-10 lg:px-16 font-bold text-orange-400 bg-black bg-opacity-80 hover:bg-cyan-300 hover:text-black"
            >
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProductsCard;
