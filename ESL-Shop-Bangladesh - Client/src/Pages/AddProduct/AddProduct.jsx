import { useForm } from "react-hook-form";
import Banner from "../../Shared/Banner/Banner";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const AddProduct = () => {
  useTitle("Add Product");
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (product) => {
    fetch("https://esl-shop-bangladesh.vercel.app/addproducts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Product Added",
          text: "Your Product Has been Added!",
        });
      });
    reset();
  };
  return (
    <>
      <Banner title={"Add Products"}></Banner>

      <div className="hero my-10">
        <div className="hero-content flex-col w-full md:flex-row gap-5">
          <div className="md:w-1/3 lg:text-left hidden md:block">
            <img
              className="w-full object-cover h-[700px] overflow-hidden"
              src="https://dug5azr6j37mk.cloudfront.net/2023/09/Untitled-1-1.webp"
              alt=""
            />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name")}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Added By</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Added By"
                  {...register("addedBy")}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">E-mail </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  defaultValue={user?.email}
                  {...register("email")}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  {...register("price")}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder="Rating"
                  {...register("rating")}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="Available quantity"
                  {...register("availableQuantity")}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo URL"
                  {...register("pictureURL")}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  className="bg-transparent input-bordered input "
                  {...register("subCategory")}
                >
                  <option value="ESL">ESL</option>
                  <option value="Nike">Nike</option>
                  <option value="Adidas">Adidas</option>
                  <option value="Puma">Puma</option>
                  <option value="Champion">Champion</option>
                  <option value="Armani">Armani</option>
                </select>
              </div>
            </div>

            <div className="w-full mt-3">
              <label className="label">
                <span className="label-text">Detail description</span>
              </label>
              <textarea
                type="text"
                placeholder="Detail description"
                {...register("detailDescription")}
                className="textarea textarea-bordered w-full textarea-lg"
                required
              />
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value={"Add Product"}
                className="btn btn-outline  w-full font-bold text-cyan-400 bg-black bg-opacity-80 hover:bg-cyan-300 hover:text-black"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
