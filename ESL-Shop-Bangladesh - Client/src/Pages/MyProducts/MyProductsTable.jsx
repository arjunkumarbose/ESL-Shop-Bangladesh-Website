import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const MyProductsTable = ({
  i,
  product,
  handleDeleteUpdate,
  setupdateProduct,
  updateProduct,
}) => {
  const {
    _id,
    name,
    price,
    subCategory,
    addedBy,
    availableQuantity,
    detailDescription,
    pictureURL,
  } = product || {};

  const { register, handleSubmit } = useForm();

  const onSubmit = (productData) => {
    fetch(
      `https://b8a10-brandshop-server-side-arjunkumarbose.vercel.app/updateproduct/${_id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(productData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated", "Your Product has been Updated!", "success");
          setupdateProduct(!updateProduct);
        }
      });
  };

  const handleDelete = (id) => {
    // alert for delete confirmation
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // delete it after confermation
      if (result.isConfirmed) {
        fetch(
          `https://b8a10-brandshop-server-side-arjunkumarbose.vercel.app/myproducts/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // delete from ui instantly and show a confirmation toast
            if (data.deletedCount > 0) {
              handleDeleteUpdate(id);
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <>
      <tr>
        <td>{i + 1}</td>

        <td className="text-base font-semibold">{name}</td>
        <td>{addedBy} </td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
        <td>
          <label
            htmlFor={`update-modal-${_id}`}
            className="btn text-green-400 bg-black font-bold rounded-full"
          >
            Update
          </label>
        </td>
        <td>
          <button
            onClick={handleDelete}
            className="btn text-red-400 bg-black font-bold rounded-full"
          >
            Delete
          </button>
        </td>
      </tr>

      <input
        type="checkbox"
        id={`update-modal-${_id}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <div className="modal-action absolute top-0 right-0">
            <label htmlFor={`update-modal-${_id}`} className="btn">
              X
            </label>
          </div>

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
    </>
  );
};

export default MyProductsTable;
