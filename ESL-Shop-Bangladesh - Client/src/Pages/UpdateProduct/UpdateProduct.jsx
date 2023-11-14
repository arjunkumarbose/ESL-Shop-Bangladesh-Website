import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Banner from "../../Shared/Banner/Banner";
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();
  console.log(product);
  const { _id, name, price, availableQuantity, detailDescription, pictureURL } =
    product || {};

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (productData) => {
    fetch(`https://esl-shop-bangladesh.vercel.app/updateproduct/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated", "Your Product has been Updated!", "success");
          navigate("/allproducts");
        }
      });
  };

  return (
    <div>
      <Banner title={"Update Product"} />

      <div className="flex justify-center text-center mx-auto w-[300px] py-10 items-center">
        <img src={pictureURL} alt="" />
      </div>

      <div className="flex justify-center mx-auto w-1/2 pb-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body shadow-2xl"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              defaultValue={name}
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
              defaultValue={price}
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
              defaultValue={availableQuantity}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture URL</span>
            </label>
            <input
              type="text"
              placeholder="Picture URL"
              {...register("pictureURL")}
              defaultValue={pictureURL}
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

          <div className="w-full mt-3">
            <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <textarea
              type="text"
              placeholder="Detail description"
              {...register("detailDescription")}
              defaultValue={detailDescription}
              className="textarea textarea-bordered w-full textarea-lg"
              required
            />
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              value="Update Product"
              className="btn text-cyan-400 font-bold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
