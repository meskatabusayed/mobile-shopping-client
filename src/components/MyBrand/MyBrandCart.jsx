import { Link } from "react-router-dom";


const MyBrandCart = ({brand}) => {
    const {id , image , Name} = brand || {};
    console.log(Name);

    

    return (
        <Link to={`/brandcategory/${Name}`}><div className="card bg-base-100 shadow-xl">
                       <figure><img src={image} alt="Brands" /></figure>
                       <div className="card-body">
                         <h2 className="card-title">{Name}</h2>
                         </div>
                     </div>
                     </Link>
    );
};

export default MyBrandCart;