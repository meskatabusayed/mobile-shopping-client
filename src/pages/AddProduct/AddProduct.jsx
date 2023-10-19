import Swal from 'sweetalert2'

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const newProduct = {name , brand , type , price , description , rating , image}
        console.log(newProduct);
        form.reset();

        // send data to the server

        fetch('http://localhost:5000/product' , {
            method:'POST' ,
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })

            }
        })




    }




 
 
    return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-3xl font-extrabold text-center">Add Product</h1>
      <form onSubmit={handleAddProduct}>
        {/* name & Brand Name Row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
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
                placeholder="Image url"
                name="image"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Product" className="btn btn-block bg-black mt-5 text-white" />
      </form>
    </div>
  );
};

export default AddProduct;
