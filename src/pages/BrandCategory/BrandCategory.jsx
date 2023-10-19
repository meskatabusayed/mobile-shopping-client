import { useLoaderData } from "react-router-dom";
import Category from "../../components/Category/Category";


const BrandCategory = () => {

    const categorys = useLoaderData();


    


    return (
        <div>
            <Category categorys={categorys}></Category>
        </div>
    );
};

export default BrandCategory;