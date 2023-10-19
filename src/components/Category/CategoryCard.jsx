import { Link } from "react-router-dom";


const CategoryCard = ({category}) => {

    const { _id ,name , brand , type , price , description , rating , image} = category || {}
    

    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src={image}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        Name:{name}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       Price: ${price}
      </p>
    </div>
    <div className="flex items-center justify-between mb-2">
    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       Brand : {brand}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       Type : {type}
      </p>
    </div>
    <div className="flex items-center justify-between mb-2">
    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       Rating : {rating}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
      {description}
    </p>
  </div>
  <div className="p-6 pt-0">
    <Link to={`/details/${_id}`}><button className="btn btn-block bg-blue-900 text-white">Details</button></Link>
    <Link to={`/update/${_id}`}><button className="btn btn-block bg-slate-900 text-white mt-2">Update</button></Link>
  </div>
</div>
        </div>
    );
};

export default CategoryCard;