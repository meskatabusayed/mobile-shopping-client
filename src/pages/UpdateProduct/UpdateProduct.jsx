import { clear } from "localforage";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const updateProduct = useLoaderData();
    const { _id ,name , brand , type , price , description , rating , image} = updateProduct || {}



    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const updatedProduct = {name , brand , type , price , description , rating , image}
        console.log(updatedProduct);
        form.reset();

        // send data to the server

        fetch(`http://localhost:5000/products/${_id}` , {
            method:'PUT' ,
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })

            }
        })




    }



    return (
        <div className="bg-[#F4F3F0] p-24">
        <h1 className="text-3xl font-extrabold text-center">Update Product : {name}</h1>
        <form onSubmit={handleUpdateProduct}>
          {/* name & Brand Name Row */}
          <div className="md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
               
                <input
                  type="text"
                  defaultValue={name}
                  placeholder="name"
                  name="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-6">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
               
                <input
                  type="text"
                  defaultValue={brand}
                  placeholder="Brand Name"
                  name="brand"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
           {/* type & Price Name Row */}
           <div className="md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
               
                <input
                  type="text"
                  defaultValue={type}
                  placeholder="Type"
                  name="type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-6">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
               
                <input
                  type="number"
                  defaultValue={price}
                  placeholder="Price"
                  name="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
           {/* description & rating Name Row */}
           <div className="md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
               
                <input
                  type="text"
                  defaultValue={description}
                  placeholder="Description"
                  name="description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-6">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
               
                <input
                  type="number"
                  defaultValue={rating}
                  placeholder="Rating"
                  name="rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
           {/* Image */}
           <div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
               
                <input
                  type="text"
                  defaultValue={image}
                  placeholder="Image url"
                  name="image"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Update Product" className="btn btn-block bg-black mt-5 text-white" />
        </form>
      </div>
    );
};

export default UpdateProduct;