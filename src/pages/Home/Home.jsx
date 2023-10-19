import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import MyBrand from "../../components/MyBrand/MyBrand";



const Home = () => {
    const loadedBrands = useLoaderData();
    



    return (
        <div>
            <div>
            <Banner></Banner>
            <MyBrand loadedBrands={loadedBrands}></MyBrand>

            


            
           </div> 
        </div>
    );
};

export default Home;